from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

def saveUser(newUser):
    if os.path.exists('user-info.json'):
        with open('user-info.json', 'r') as f:
            users = json.load(f)
    else:
        users = []

    users.append(newUser)

    with open('user-info.json', 'w') as f:
        json.dump(users, f, indent=4)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    saveUser(data)
    return jsonify({"status": "success", "message": "User registered!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not os.path.exists('user-info.json'):
        return jsonify({"status": "error", "message": "The data is empty. Register first!"})

    with open('user-info.json', 'r') as f:
        allUsers = json.load(f)
    
    for i in allUsers:
        if i['username'] == data['username'] and i['password'] == data['password'] and i['email'] == data['email']:
            return jsonify({"status" : "success", "message" : "Welcome back!"})
        
    return jsonify({"status": "error", "message": "Invalid Userame or Password"})