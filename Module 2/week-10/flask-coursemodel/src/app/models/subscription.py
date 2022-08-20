from src.app import DB, MA
from src.app.models.student import Student
from src.app.models.lecture import Lecture



class Subscription(DB.Model):
    __tablename__ = 'subscriptions'
    semester = DB.Column(DB.Integer, primary_key=True, nullable=False)
    fk_stud_id = DB.Column(DB.Integer, DB.ForeignKey(Student.stud_id), primary_key=True, nullable=False)
    fk_lec_cod = DB.Column(DB.Integer, DB.ForeignKey(Lecture.lec_cod), nullable=False)
    score = DB.Column(DB.Numeric(10,2), nullable=False)
    missing = DB.Column(DB.Integer, nullable=False)
    status = DB.Column(DB.Boolean, nullable=False)

    def __init__(self, semester, fk_stud_id, fk_lec_cod, score, missing, status) -> None:
        self.semester = semester
        self.fk_stud_id = fk_stud_id
        self.fk_lec_cod = fk_lec_cod
        self.score = score
        self.missing = missing
        self.status = status

    @classmethod
    def seed(cls, semester, fk_stud_id, fk_lec_cod, score, missing, status):
        subscription = Subscription(
            semester = semester, 
            fk_stud_id = fk_stud_id, 
            fk_lec_cod = fk_lec_cod, 
            score = score, 
            missing = missing, 
            status = status
        )
        subscription.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()

class SubscriptionSchema(MA.Schema):
    class Meta:
        fields = ('semester', 'fk_stud_id', 'fk_lec_cod', 'score', 'missing', 'status')

subscription_share_schema = SubscriptionSchema()
subscriptions_share_schema = SubscriptionSchema(many=True)
