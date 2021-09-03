from flask import Flask
from .config import config
from decouple import config as config_decouple


def create_app(enviroment):
    app = Flask(__name__)
    app.config.from_object(enviroment)

    return app

enviroment = config['development']
if config_decouple('PRODUCTION', default=False):
    enviroment = config['production']

app = create_app(enviroment)

from src import routes
