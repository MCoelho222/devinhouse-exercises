from flask import Blueprint, jsonify

allstudents = Blueprint('allstudents', __name__, url_prefix='/allstudents')

@allstudents.route("/", methods=['GET'])
def list_all_students():
    return jsonify({'name': 'Marcelo', 'age': 41})

    