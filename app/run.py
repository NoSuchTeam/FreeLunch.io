from flask import Flask, request, session, g, redirect, url_for, \
     abort, render_template, flash, send_from_directory
from contextlib import closing
from datetime import timedelta
import sqlite3 as sqlite
import csv, time, datetime, os, uuid, random
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

# main entry point into the app
# replace the return with render_template and the main entry point 
@app.route("/", methods = ['GET'])
def main_entry():
    return("Hello World!") 

if __name__ == "__main__":
    app.run(port=80)

