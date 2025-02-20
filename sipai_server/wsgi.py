from flask import Flask, request, response
from openai import OpenAI
import subprocess

app = Flask(__name__)

ID_dict = {}

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/video_concat")
def video_concat():
    subprocess.run(['sh', './video_concat.exe'])
    return "run video_concat"


import os
import sys


sys.path.insert(0, os.path.dirname(__file__))


def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    message = 'It works!\n' + request.args.get('deviceID')
    version = 'Python %s\n' % sys.version.split()[0]
    response = '\n'.join([message, version])
    return [response.encode()]







