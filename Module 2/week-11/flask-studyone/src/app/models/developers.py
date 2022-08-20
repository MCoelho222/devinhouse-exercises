from src.app import MA, DB
from src.app.models.user import User, user_share_schema
from src.app.models.technology import TechnologySchema

developer_technologies = DB.Table('developer_technologies',
DB.Column('developer_id', DB.Integer, DB.ForeignKey('alldevelopers.id')),
DB.Column('technology_id', DB.Integer, DB.ForeignKey('technologies.id'))
)

class Developers(DB.Model):
    __tablename__ = "alldevelopers"
    id = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    experience = DB.Column(DB.Integer, nullable=True)
    remote_work = DB.Column(DB.Boolean, nullable=False, default=True)
    user_id = DB.Column(DB.Integer, DB.ForeignKey(User.id), nullable=False)
    technologies = DB.relationship('Technology', secondary=developer_technologies, backref='alldevelopers')
    user = DB.relationship('User', foreign_keys=[user_id])
    def __init__(self, experience, remote_work, user_id, technologies):
        self.experience = experience
        self.remote_work = remote_work
        self.user_id = user_id
        self.technologies = technologies

    @classmethod
    def seed(cls, experience, remote_work, user_id, technologies):
        developer = Developers(
            experience = experience,
            remote_work = remote_work,
            user_id = user_id,
            technologies = technologies
        )

        developer.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()
        
class DeveloperSchema(MA.Schema):
    technologies = MA.Nested(TechnologySchema, many=True)
    user = MA.Nested(user_share_schema)
    class Meta:
        fields = ('id', 'experience', 'remote_work', 'user_id', 'technologies', 'user')

developer_share_schema = DeveloperSchema()
developers_share_schema = DeveloperSchema(many=True)