
from flask import Blueprint, request, jsonify
from src.app.utils import exist_key
from src.app.db import read
from src.app.services.developer_services import list_all_developers_service
from src.app.middlewares.auth import requires_access
developer = Blueprint('developers', __name__, url_prefix="/developer")

@developer.route('/', methods = ["GET"])
@requires_access('READ')
def list_all_developers(current_user):
  print(current_user)
  list_developers = list_all_developers_service()

  return jsonify(list_developers)

@developer.route('/', methods = ["POST"])
def add_new_developer():
  list_keys = ['name', 'techs', 'xp', 'skills']

  data = exist_key(request.get_json(), list_keys)

  if 'error' in data:
    return jsonify(data)

  techs = read('technologies')
  tech_developer = []
  tech_data_for_save = []
  if techs == None or len(techs) == 0:
    for tech in data['techs']:
      if 'id' not in tech:
        if len(tech_developer) == 0:
          tech_developer.append(1)
          tech_data_for_save.append({"tech": tech['tech'], "id": 1})
        else: 
          tech_developer.append(len(tech_developer)+1)
          tech_data_for_save.append({"tech": tech['tech'], "id": len(tech_data_for_save)+1})
      elif tech['id'] == 1:
        for index, item in enumerate(tech_developer):
          if item == 1:
            tech_developer.pop(index)
            tech_developer.append(item + 1)
            tech_data_for_save[index]['id'] = item + 1
      elif tech['id'] != 1:
        tech_developer.append(tech['id'])
        tech_data_for_save.append(tech)

  return data