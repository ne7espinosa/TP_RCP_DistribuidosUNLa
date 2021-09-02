from flask import render_template, redirect, url_for
from flask import request, g, flash
from src import app
import os
import json


@app.before_request
def before_request():
    """Connet to the database before each request."""
    try:
        parent_dir = os.path.dirname(os.path.abspath(__file__))
        path = os.path.join(parent_dir, 'static', 'data.json')
        with open(path) as json_file:
            g.db = json.load(json_file)
    except FileNotFoundError:
        pass


@app.route('/')
def index():
    return redirect(url_for('basic'))


@app.route('/home')
def basic():
    return "Hello world"

