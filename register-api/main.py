from flask import Flask, request, make_response
from flask_cors import CORS
from flask_api import status

import json # import dumps, loads

from classes.person import *

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

DEFAULT_PORT = 3000

@app.route("/register", methods=['POST'])
def register():
  register_person = Person(body()['name'], body()['email'], body()['password'])
  response_payload = json.dumps(register_person.to_json())
  response = make_response(response_payload, status.HTTP_200_OK)
  print(response)
  return response

@app.before_request
def check_payload():

  print(request.get_json())
  if body() == None:
    return make_response('no given body', status.HTTP_400_BAD_REQUEST)
  elif 'name' not in body():
    return make_response('name is mandatory', status.HTTP_400_BAD_REQUEST)
  elif 'email' not in body():
    return make_response('email is mandatory', status.HTTP_400_BAD_REQUEST)
  elif 'password' not in body():
    return make_response('password is mandatory', status.HTTP_400_BAD_REQUEST)

def body():
  return request.get_json()

@app.errorhandler(Exception)
def error(e):
  return make_response(e.message, status.HTTP_500_INTERNAL_SERVER_ERROR)

if __name__ == "__main__":
  app.run(port=DEFAULT_PORT)