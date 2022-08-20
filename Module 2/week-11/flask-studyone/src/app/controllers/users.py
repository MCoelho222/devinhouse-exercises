from flask import Blueprint, request, jsonify
from src.app.middlewares.auth import requires_access
from src.app.utils import exist_key
from src.app.services.user_services import create_user
from src.app.services.user_services import login_user
from google_auth_oauthlib.flow import Flow
from werkzeug.utils import redirect
import os
import requests
from flask.globals import session
from google import auth

user = Blueprint('users', __name__, url_prefix="/user")

flow = Flow.from_client_secrets_file(
    client_secrets_file = 'src/app/db/client_secret.json',
    scopes = [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "openid"
    ],
    redirect_uri = 'http://localhost:5000/user/callback'
)

@user.route('/create', methods=['POST'])
@requires_access('CREATE')
def create():
    list_keys = ['city_id', 'name', 'age', 'email', 'password', 'roles']

    data = exist_key(request.get_json(), list_keys)

    response = create_user(
        data['city_id'],
        data['name'],
        data['age'],
        data['email'],
        data['password'],
        data['roles'],

    )

    if 'error' in response:
        return jsonify(response), 400

@user.route('/login', methods=['POST'])
def login():
    list_keys = ['email', 'password']

    data = exist_key(request.get_json(), list_keys)

    response = login_user(data['email'], data['password'])
   
    if 'error' in response:
        return jsonify({'error': response['error']}), response['status_code']
    return jsonify(response), 200

@user.route('auth/google', methods=['POST'])
def auth_google():

    authorization_url, state = Flow.authorization_url()

    return {'url': authorization_url}

@user.route('/callback', methods=['GET'])
def callback():
    print(request)
    flow.fetch_token(authorization = request.url)
    credentials = flow.credentials
    request_session = requests.session()
    token_google = auth.transport.requests.Request()
    return redirect('http://localhost:3000')
