from src.app import MA, DB
from src.app.models.country import Country, country_share_schema

class State(DB.Model):
    __tablename__ = 'states'
    id = DB.Column(DB.Integer, autoincrement=True, primary_key=True)
    country_id = DB.Column(DB.Integer, DB.ForeignKey(Country.id), nullable=False)
    name = DB.Column(DB.String(84), nullable=False)
    acron = DB.Column(DB.String(2), nullable=True)
    country = DB.relationship("Country", foreign_keys=[country_id])

    def __init__(self, country_id, name, acron):
        self.country_id = country_id
        self.name = name
        self.acron = acron

    @classmethod
    def seed(cls, country_id, name, acron):
        state = State(
            country_id = country_id,
            name = name,
            acron = acron
        )
        state.save()

    def save(self):
        DB.session.add(self)
        DB.session.commit()
        
class StateSchema(MA.Schema):
    country = MA.Nested(country_share_schema)
    class Meta:
        fields = ('id', 'country_id', 'name', 'acron', 'country')

state_share_schema = StateSchema()
states_share_schema = StateSchema(many=True)