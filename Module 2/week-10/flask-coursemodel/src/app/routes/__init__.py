from src.app.controllers.students import allstudents

def routes(app):

    app.register_blueprint(allstudents)