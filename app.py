
from flask import Flask, jsonify, request, render_template
import os
import openai

app = Flask(__name__)

@app.route('/get_schedule/<password>/<input_tasks>')
def test(password, input_tasks):
   split_tasks = request.args.getlist('task')
   return jsonify({'password': password, 'input_tasks':split_tasks})

@app.route('/')
def homepage():
   return "helloworld"
   # return render_template('index.html')


#http://127.0.0.1:5000/get_schedule/123456/input_tasks?task=a&task=b 

# @app.route('/get_schedule')
# def chat_completion(password, input_tasks):
#    openai.api_key = input("Enter our openAI API secret key:")
   
#    messages = []
#    messages.append({"role":"system",
#                      "content":"you are a personal schdule assistant \
#                                 to help people to make timeline plans wisely."})
#    messages.append({"role":"user","content":"""You are a personal schdule planning assistant that help people to plan their scedule for a whole week.
#          I will input a sequence of natural language described tasks.
#          You will help them plan out all these tasks that meet their description and in a reasonable manner.
#          You will only output should be a single json file.
#          See detailed instructions and requirements below.

#          Input:
#          '''
#          a list of descriptions
#          '''

#          Output:
#          '''
#          a single json (indent=2) as the output. 
#          Example output format:
#          {
#             "Monday": [
#                         {
#                            "Task":xx,
#                            "TaskID":xx,
#                            "Start_time":xx, 
#                            "End_time":xx, 
#                         }, ...
#             ],
#             "Tuesday": [...],
#             ...
#             "Friday": [...],
#             "Extra": [
#                         {
#                            "Task":xx,
#                            "TaskID":xx,
#                            "Start_time":xx, 
#                            "End_time":xx, 
#                            "Original_day":xx
#                         }, ...
#             ]
#          }
#          '''


#          Instructions & Requirements:
#          '''
#          1. The first piority to do is try to arrange time slot for task with specified time or weekday.
#                - if it is not possible to put all time specified task on the described day, put it under the extra key.
#          2. For task that does not have a specific time or date, try to find spare time to avoild conflict with the specified tasks.
#                - if no duration specified, use common sense to make educated guess. (2-3 hours for a movie, an hour for lunch, etc.).
#                - if no start time or end time specified, use common sense to make the time reasonable. (eg. lunch during noon, dinner at night).
#                - try to allocate these unspecified-time tasks evenly spread through out the week. Avoiding have everything scheduled on the first/second half of the week and nothing to do on the other half.
#                      (eg. all days have task in it except for Friday, allocate the task to Friday)
#                - for repeating task (eg. workout 3 times a week),  try to evenly spread them to avoid do them on the same day or consecutive days.
#                - allocate a 5-10 min break between task if possible (without violating the time specified) and no need to include break as task in the output json..
#                - leave some free time for lunch everyday noon. 
#          3. You can assume everyday's tasks start from 9:00 and end before 21:00 unless specified.
#          4. Assign the tasks to the same/repeating task_id if they are the same, otherwise assign a unique task_id with positive number. 
#          5. If possible, try to allocate tasks evenly so that most of the day have some task instead of some days are overloaded some days are empty with plan.
#          ''' """})
#    model = "gpt-3.5-turbo"

#    response = openai.ChatCompletion.create(model=model, messages=messages, temperature=0)

#    reply = response["choices"][0]["message"]["content"]
#    return reply
 
if __name__ == '__main__':
   app.run(debug=True)