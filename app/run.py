from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash, send_from_directory
from contextlib import closing
from datetime import timedelta
import sqlite3 as sqlite
import csv, time, datetime, os, uuid, random, json
from flask.ext.jsonpify import jsonify
from flask.ext.sqlalchemy import SQLAlchemy


app = Flask(__name__)

config = {}

with open("config.ini") as config_file:
    for pair in config_file:
        (key, value) = pair.split("=")
        config[key.strip()] = value.strip()

app.config.update(
    DATABASE = config['DATABASE'],
    DEBUG = config['DEBUG'],
    SECRET_KEY = config['SECRET_KEY'],
    USERNAME = config['USERNAME'],
    PASSWORD = config['PASSWORD'],
    SESSION_COOKIE_HTTPONLY = config['SESSION_COOKIE_HTTPONLY'],
    
)

def connect_db():
    return sqlite.connect('data.db')

def log(suggestion):
    with closing(connect_db()) as db:
        db.text_factory = str
        db.cursor().execute("insert into suggestions values (?,?,?,?,?,?)", [None, suggestion['OrgName'], suggestion['Location'], suggestion['Phone'], suggestion['Email'],suggestion['Description']])
        db.commit()

def get_services(filter_dict):
    pass

def get_entries():
    rows = []
    with closing(connect_db()) as db:
        # db.text_factory = str
        
        curs = db.cursor().execute("select * from organizations")
        table = []
        for rows in curs:
            table.append(rows)
    return table

# main entry point into the app
# replace the return with render_template and the main entry point 
@app.route("/", methods = ['GET'])
def main_entry():
    return render_template('index.html')

# #renders a map
# @app.route("/map", methods = ['POST'])
# def map():
#     return request.form['userFilters']

# @app.route("/profile", methods = ['POST'])
# def profile():
#     return "profile"

# @app.route("/lists", methods = ['POST'])
# def lists():
#     return jsonify(list = get_entries())

@app.route("/suggests", methods = ['POST', 'GET'])
def suggests():
    if request.method == 'GET':
        return render_template('suggests.html')
    else:
        log(request.form)
        return "Logged?"

@app.route("/api/v1/profile", methods = ['POST'])
def profile():
    # userFilters = request.form['filters']
    # print userFilters
    content = json.loads(request.get_json())
    filters = content['filters']
    return ""

@app.route("/notifications", methods = ['POST'])
def notifications():
    return "notifications"

if __name__ == "__main__":
    app.run(port=80)

