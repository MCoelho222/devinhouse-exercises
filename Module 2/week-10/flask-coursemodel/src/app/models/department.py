from src.app import DB, MA

class Department(DB.Model):
    __tablename__ = 'departments'
    dpt_cod = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    dpt_name = DB.Column(DB.String(84), nullable=False)

    def __init__(self, dpt_name):
        self.dpt_name = dpt_name

    @classmethod
    def seed(cls, dpt_name):
        department = Department(
            dpt_name = dpt_name
        )

        department.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()
        

class DepartmentSchema(MA.Schema):
    class Meta:
        fields = ('dpt_cod', 'dpt_name')

department_share_schema = DepartmentSchema()
departments_share_schema = DepartmentSchema(many=True)
