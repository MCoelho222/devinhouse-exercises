from src.app import DB, MA

class Technology(DB.Model):
    __tablename__ = 'technologies'
    id = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    name = DB.Column(DB.String(84), nullable=False)

    def __init__(self, name):
        self.name = name

    @classmethod
    def seed(cls, name):
        tech = Technology(
            name = name
        )
        tech.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()

class TechnologySchema(MA.Schema):
    class Meta:
        fields = ('id', 'name')

technology_share_schema = TechnologySchema()
technologies_share_schema = TechnologySchema(many=True)