import datetime
from src.app import DB, MA
from src.app.models.course import Course


class Student(DB.Model):
    __tablename__ = 'students'
    stud_id = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    stud_name = DB.Column(DB.String(84), nullable=False)
    date_in = DB.Column(DB.Date, default=datetime.datetime.utcnow, nullable=False)
    fk_course_cod = DB.Column(DB.Integer, DB.ForeignKey(Course.course_cod), nullable=False)
    free_stud = DB.Column(DB.Boolean, nullable=False)

    def __init__(self, stud_name, date_in, fk_course_cod, free_stud) -> None:
        self.stud_name = stud_name
        self.date_in = date_in
        self.fk_course_cod = fk_course_cod
        self.free_stud = free_stud
        
    @classmethod
    def seed(cls, stud_name, date_in, fk_course_cod, free_stud):
        student = Student(
            stud_name = stud_name,
            date_in = date_in,
            fk_course_cod = fk_course_cod,
            free_stud = free_stud
        )
        student.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()

class StudentSchema(MA.Schema):
    class Meta:
        fields = ('stud_id', 'stud_name', 'date_in', 'fk_course_cod', 'free_stud')

student_share_schema = StudentSchema()
students_share_schema = StudentSchema(many=True)
