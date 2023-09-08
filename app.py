from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import os
import openai

app = Flask(__name__)
CORS(app)

# @app.route('/get_schedule')
# def test(password, input_tasks):
#    split_tasks = request.args.getlist('task')
#    return jsonify({'password': password, 'input_tasks':split_tasks})

@app.route('/')
def homepage():
   return "helloworld"
   # return render_template('index.html')


#http://127.0.0.1:5000/get_schedule/123456/input_tasks?task=I want to play basketball on Friday&task=b 

@app.route('/get_schedule/<password>/<input_tasks>')
def chat_completion(password, input_tasks):
   openai.api_key = password
   # for testing: #return {"password": password, "input": request.args.getlist('task')}
   messages = []
   messages.append({"role":"system",
                     "content":"you are a personal schdule assistant \
                                to help people to make timeline plans wisely."})
   
   with open("prompts/prompt_2.txt","r") as f:
      customized_prompt = f.read()
      
   split_tasks = request.args.getlist('task')
   for task in split_tasks:
      customized_prompt += " - "+task + "\n"

   messages.append({"role":"user", "content":customized_prompt})
   model = "gpt-3.5-turbo"

   response = openai.ChatCompletion.create(model=model, messages=messages, temperature=0)

   reply = response["choices"][0]["message"]["content"]
   return reply
 
if __name__ == '__main__':
   app.run(debug=True)