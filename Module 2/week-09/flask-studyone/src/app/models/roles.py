from src.app import DB, MA
from src.app.models.permissions import permissions_share_schema

role_permissions = DB.Table('role_permissions',
                    DB.Column('role_id', DB.Integer, DB.ForeignKey('roles.id')),
                    DB.Column('permission_id', DB.Integer, DB.ForeignKey('permissions.id'))
                    )
class Role(DB.Model):
  __tablename__ = "roles"
  id = DB.Column(DB.Integer, autoincrement = True, primary_key = True)
  description = DB.Column(DB.String(84), nullable = False)
  permissions = DB.relationship('Permission', secondary=role_permissions, backref='roles')

  def __init__(self, description, permissions):
    self.description = description
    self.permissions = permissions
  
  @classmethod
  def seed(cls, description, permissions):
    role = Role(
      description = description,
      permissions = permissions
    )
    role.save()
  
  def save(self):
    DB.session.add(self)
    DB.session.commit()

class RoleSchema(MA.Schema):
  permissions = MA.Nested(permissions_share_schema)
  class Meta:
    fields = ('id', 'description', 'permissions')
role_share_schema = RoleSchema()
roles_share_schema = RoleSchema(many = True)
