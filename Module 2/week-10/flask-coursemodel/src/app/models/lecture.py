from src.app import DB, MA

class Lecture(DB.Model):
    __tablename__ = 'lectures'
    lec_cod = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    lec_name = DB.Column(DB.String(84), nullable=False)
    lec_hours = DB.Column(DB.Integer, nullable=False)

    def __init__(self, lec_name, lec_hours):
        self.lec_name = lec_name
        self.lec_hours = lec_hours

    @classmethod
    def seed(cls, lec_name, lec_hours):
        lecture = Lecture(
            lec_name = lec_name,
            lec_hours = lec_hours
        )

        Lecture.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()
        

class LectureSchema(MA.Schema):
    class Meta:
        fields = ('lec_cod', 'lec_name', 'lec_hours')

lecture_share_schema = LectureSchema()
lectures_share_schema = LectureSchema(many=True)