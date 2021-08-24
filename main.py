# A very simple Flask Hello World app for you to get started with...
import unittest
import logging
import json

from flask import Flask
from flask import request, make_response, redirect, session, url_for
from flask import render_template
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
        return render_template('index.html')
