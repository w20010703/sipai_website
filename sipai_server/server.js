const fs = require('fs')
const path = require('path') 
const express = require('express');
const app = express();
const { spawn } = require('child_process');
const fetch = require("node-fetch");
const port = 3001;

var ID_dict = {}

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/video_concat', (req, res) => {
  console.log("video_concat")
  
  const child = spawn('sh', ['./video_concat.exe']);

  child.on('exit', (exitCode, signal) => {
    console.log(exitCode, signal);
  });

  child.kill('SIGINT');
  
});

app.get('/get_robot_response', (req, res) => {
  console.log("get_robot_response: ", req.query.deviceID, req.query.msg)
  if (!Object.keys(ID_dict).includes(req.query.deviceID)) {
    console.log("[new res]");
    var res_msg;
    const _get_res = async () => {
      res_msg = await get_robot_response(req.query.msg)
      console.log(res_msg)
      ID_dict[req.query.deviceID] = res_msg
    }
    _get_res()
    res.send(res_msg);
  }
  else {
    console.log("[end res]");
    console.log(ID_dict)
    res.send(ID_dict[req.query.deviceID]);
  }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const OpenAI = require('openai')
const openai = new OpenAI({apiKey: ""});
const api_key = ""

async function get_robot_response(msg) {
  msg = "我今天的心情："+msg+"。\n你可以給我輕鬆有趣的話嗎？15字以內"
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: msg }],
    model: "gpt-3.5-turbo",
  });


  console.log(completion.choices[0]);
  return completion.choices[0]["message"]["content"]
}