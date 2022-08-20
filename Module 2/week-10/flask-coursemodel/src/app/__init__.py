# __version__ = '0.1.0'
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from src.app.config import app_config

DB = SQLAlchemy()
MA = Marshmallow()


def create_app():

    app = Flask(__name__)
    app.config.from_object(app_config[os.getenv('FLASK_ENV')])
    DB.init_app(app)
    MA.init_app(app)
    Migrate(app=app, db=DB, directory='./src/app/migrations')
    from src.app.models import department, lecture, course, student, subscription
    return app


