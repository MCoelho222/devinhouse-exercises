from flask import Blueprint

cities = Blueprint('cities', __name__, url_prefix="/city")

@cities.route('/', methods = ["GET"])
def list_all_cities():
  return {"data": ["Javascript", "Python", "Java"]}