import OpenAI from "openai";
import { getCookie } from "./cookie_utils";

export const get_robot_response = (msg) => {
  if (getCookie("SIPAI_REPLY") === "") {
    const openai = new OpenAI({apiKey: process.env.REACT_APP_OPENAI_KEY, dangerouslyAllowBrowser: true});

    async function _get_robot_response(msg) {
      msg = "我今天的心情："+msg+"。\n你可以給我輕鬆有趣的話嗎？15字以內"
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: msg }],
        model: "gpt-3.5-turbo",
      });


      // console.log(completion .choices[0]);
      return completion.choices[0]["message"]["content"]
    }

    return _get_robot_response(msg)
  }
  else {
    return getCookie("SIPAI_REPLY")
  }
}



