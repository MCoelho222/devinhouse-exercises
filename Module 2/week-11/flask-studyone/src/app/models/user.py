from src.app import DB, MA
from src.app.models.city import City, city_share_schema #Adicionar nas importações
from src.app.models.roles import roles_share_schema #Adicionar nas importações
import bcrypt #Adicionar nas importações

users_roles = DB.Table('users_role',
                    DB.Column('user_id', DB.Integer, DB.ForeignKey('users.id')),
                    DB.Column('role_id', DB.Integer, DB.ForeignKey('roles.id'))
                    )

class User(DB.Model):
    __tablename__ = 'users'
    id = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    city_id = DB.Column(DB.Integer, DB.ForeignKey(City.id), nullable=False)
    name = DB.Column(DB.String(84), nullable=False)
    age = DB.Column(DB.Integer, nullable=False)
    email = DB.Column(DB.String(84), nullable=False)
    password = DB.Column(DB.String(84), nullable=False)
    city = DB.relationship("City", foreign_keys=[city_id])
    roles = DB.relationship('Role', secondary=users_roles, backref='users')

    def __inti__(self, city_id, name, age, email, password, roles):
        self.city_id = city_id
        self.name = name
        self.age = age
        self.email = email
        self.password = password
        self.roles = roles
        
    def check_password(self, password):
        return bcrypt.checkpw(password.encode("utf-8"), self.password.encode("utf-8"))
    #Dentro da classe User, iremos adicionar esse bloco  
    @classmethod
    def seed(cls, city_id, name, age, email, password, roles):
        user = User(
        city_id = city_id,
        name = name,
        age = age,
        email = email,
        password = cls.encrypt_password(password.encode("utf-8")),
        roles = roles
        )

        user.save()

    @staticmethod
    def encrypt_password(password):
        return bcrypt.hashpw(password, bcrypt.gensalt()).decode('utf-8')
   
    def save(self):
        DB.session.add(self)
        DB.session.commit()

class UserSchema(MA.Schema):
    city = MA.Nested(city_share_schema)
    roles = MA.Nested(roles_share_schema)

    class Meta:
        fields = ('id', 'city_id', 'name', 'age', 'email', 'password', 'city', 'roles')

user_share_schema = UserSchema()
users_share_schema = UserSchema(many=True)