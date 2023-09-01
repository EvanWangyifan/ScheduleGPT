import React from 'react';
import axios from 'axios';


function InputColumnLayout({inputBoxNumber, sendData, setSendData}) {

  const [inputTask, setInputTask] = React.useState([]);

  const fetchData = (password, input_tasks) => {
    //console.log("fetch from " + `https://schedulegpt.onrender.com/get_schedule/${password}/input_tasks?${input_tasks}`);
    //fetch(`https://schedulegpt.onrender.com/get_schedule/${password}/input_tasks?${input_tasks}`, { method:'GET',headers: { accept: 'application/json' }})
    
  }

  React.useEffect(() => {
    // Perform the GET request using Axios
    const password = "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";
    let input_tasks = "task=I want to play basketball on Monday&task=I want to do homework on Tuesday";
    axios.get(`https://schedulegpt.onrender.com/get_schedule/${password}/input_tasks?${input_tasks}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      }
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }, []);

  React.useEffect(() => {
    for(let i = 0; i < inputBoxNumber; ++i){
      const singleInput = (
        <div class = "form-item">
          <input id={i} type = "text" class = "task-item" placeholder = "" /> 
        </div>
      )
      setInputTask([...inputTask, singleInput])
    }
  }, [inputBoxNumber]);

  React.useEffect(() => {
    if(sendData){
      setSendData(false);
      // send data to API and receive response
      const password = "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";
      let input_tasks = ""
      for(let i = 0; i < inputTask.length-1; i++){
        input_tasks += "task="+(document.getElementById(i).value) + "&";
      }
      input_tasks += "task="+(document.getElementById(inputTask.length-1).value);
      fetchData(password, input_tasks);
    }
  }, [sendData]);

  return (
    <form class="form-group">
          <span> Add Your Task: </span>
          {inputTask}
          <br/>
      </form>
  );
}

export default InputColumnLayout;
