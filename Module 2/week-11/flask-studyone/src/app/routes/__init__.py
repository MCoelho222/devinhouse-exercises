from src.app.controllers.technologies import technology
from src.app.controllers.developers import developer
from src.app.controllers.users import user
from src.app.controllers.cities import cities

def routes(app):
    app.register_blueprint(technology)
    app.register_blueprint(developer)
    app.register_blueprint(user)
    app.register_blueprint(cities)