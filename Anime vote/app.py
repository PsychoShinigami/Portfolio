from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app= Flask(__name__)
CORS(app)

@app.route('/reg-vote', methods=['POST'])
def regVote():
      data= request.json
      name= data.get('name')
      anime= data.get('anime')
      count= data.get('currentCount')

      if os.path.exists('votes.json'):
            with open('votes.json', 'r') as f:
                  try:
                        all_votes = json.load(f)
                  except json.JSONDecodeError:
                        all_votes = []

      else:
            all_votes= []
                               
      newVote= {"name": name, "anime": anime, "count": count}
      all_votes.append(newVote)

      with open('votes.json', 'w') as f:
            json.dump(all_votes, f, indent=4)

      return jsonify({"status": "success", "message": f"Recorded: {name} voted {anime}"})

@app.route('/results', methods=['GET'])
def results():
    if os.path.exists('votes.json'): 
        with open('votes.json', 'r') as f:
            try:
                votes_list = json.load(f)
            except json.JSONDecodeError:
                votes_list = []
    else:
        votes_list = []

    counts = {
        "One Piece": 0,
        "Naruto": 0,
        "Bleach": 0
    }

    for vote in votes_list:
        anime_name = vote.get('anime')
        if anime_name in counts:
            counts[anime_name] += 1

    return jsonify({"status": "success", "counts": counts})
      
if __name__=='__main__':
      app.run(debug= True)
   