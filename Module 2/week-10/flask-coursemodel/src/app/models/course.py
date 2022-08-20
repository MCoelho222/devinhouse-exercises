from src.app import DB, MA
from src.app.models.department import Department
from src.app.models.lecture import LectureSchema



course_matrix = DB.Table('course_matrix',
    DB.Column('course_cod', DB.Integer, DB.ForeignKey('courses.course_cod')),
    DB.Column('lec_cod', DB.Integer, DB.ForeignKey('lectures.lec_cod'))
)

class Course(DB.Model):
    __tablename__ = 'courses'
    course_cod = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    course_name = DB.Column(DB.String(84), nullable=False)
    course_dpto = DB.Column(DB.Integer, DB.ForeignKey(Department.dpt_cod))
    lectures = DB.relationship('Lecture', secondary='course_matrix', backref='courses')

    def __init__(self, course_name, course_dpto):
        self.course_name = course_name
        self.course_dpto = course_dpto

    @classmethod
    def seed(cls, course_name, course_dpto):
        course = Course(
            course_name = course_name,
            course_dpto = course_dpto
        )

        Course.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()
        

class CourseSchema(MA.Schema):
    class Meta:
        fields = ('course_cod', 'course_name', 'course_dpto')

course_share_schema = CourseSchema()
courses_share_schema = CourseSchema(many=True)