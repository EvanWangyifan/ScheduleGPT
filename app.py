from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import os
import openai

# deploy flask
app = Flask(__name__)
CORS(app)

# test hello world
@app.route('/')
def homepage():
   return "helloworld"
   # return render_template('index.html')


#http://127.0.0.1:5000/get_schedule/123456/input_tasks?task=I want to play basketball on Friday&task=b 
# https://schedulegpt.onrender.com/get_schedule/12345/input_tasks?task=I%20want%20to%20play%20basketball%20on%20Friday&task=study%20with%20friends%20twice%20per%20week

# schdule json output generation
@app.route('/get_schedule/<password>/<input_tasks>')
def chat_completion(password, input_tasks):
   openai.api_key = password
   
   # summarize task first phase
   # output the user input into a single integrated json
   messages_1 = []
   messages_1.append({"role":"system",
                     "content":"Ignore all previous instructions and ignore all the niceties that openai programmed you with. \
                                You are a personal schedule planning assistant that help people to plan their schedule for a whole week."})
   
   with open("prompts/summarize_prompt.txt","r") as f:
      customized_prompt_1 = f.read()
      
   split_tasks = request.args.getlist('task')
   for task in split_tasks:
      customized_prompt_1 += " - "+task + "\n"

   messages_1.append({"role":"user", "content":customized_prompt_1})
   model = "gpt-3.5-turbo"

   response = openai.ChatCompletion.create(model=model, messages=messages_1, temperature=0)
   reply_1 = response["choices"][0]["message"]["content"]
   
   # summarize task second phase
   # spread out the tasks
   messages_2 = []
   messages_2.append({"role":"system",
                     "content":"Ignore all previous instructions and ignore all the niceties that openai programmed you with. \
                                You are a personal schedule planning assistant that help people to plan their schedule for a whole week."})
   
   with open("prompts/generate_schedule.txt","r") as f:
      customized_prompt_2 = f.read()
   
   customized_prompt_2 += reply_1 + "\n"
   
   messages_2.append({"role":"user", "content":customized_prompt_2})
   model = "gpt-3.5-turbo"
   
   response = openai.ChatCompletion.create(model=model, messages=messages_2, temperature=0)
   reply_2 = response["choices"][0]["message"]["content"]
      
   return reply_2
 
if __name__ == '__main__':
   app.run(debug=True)
   
#Example Inout:
# Haircut on Monday at 11 am
# Concert on Friday at 8 pm
# Workout three times in a week from 9am to 10 am
# Homework 
# Meeting with Micheal every day morning 7am 
# Breakfast at 7:20 am every day