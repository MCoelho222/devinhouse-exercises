from src.app import create_app
from src.app.routes import routes
from flask.cli import with_appcontext
import click
from src.app import DB
from src.app.db import populate_db

app = create_app()
routes(app)

@click.command(name='populate_db')
@with_appcontext
def call_command():
    populate_db()
    
@click.command(name='delete_tables')
@with_appcontext
def delete_tables():
    DB.drop_all()

app.cli.add_command(call_command)
app.cli.add_command(delete_tables)

if __name__ == "__main__":
    app.run()