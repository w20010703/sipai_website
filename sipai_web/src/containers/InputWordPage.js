import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { get_robot_response } from "../server_api";
import { setCookie, getCookie } from "../cookie_utils";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/InputWordPage.css';

class InputWordPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input_word: "",
      load_page_flag: false,
      mobile_flag: isMobile ? "mb/mb_" : "",
      mb_class_flag: isMobile ? "mb_" : "",
    }

    this.getVideo = this.getVideo.bind(this)
    this.hide_bar = this.hide_bar.bind(this)
  }

  hide_bar(e) {
    var current_y = e.target.scrollTop;
    if (current_y < 100) {
      this.setState({
        previous_y: current_y,
        hide_flag: false
      })
    } else if (this.state.previous_y - current_y > 0) {
      this.setState({
        previous_y: current_y,
        hide_flag: false
      })
    } else if (this.state.previous_y  - current_y < 0) {
      this.setState({
        previous_y: current_y,
        hide_flag: true
      })
    }
    else {
      this.setState({
        previous_y: 0,
        hide_flag: false
      })
    }
  }

  async getVideo() {
    if (getCookie("SIPAI_REPLY") !== "") {
      toast("今天已經玩過心情小語了喔！", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
      this.setState({
        load_page_flag: false
      })
    }
    else {
      const res = await get_robot_response(this.state.input_word)
      setCookie("SIPAI_REPLY", res, 1)
      console.log(getCookie("SIPAI_REPLY"))
      this.setState({
        load_page_flag: true
      })
    }
  }

  // getDeviceID() {
  //   var deviceID = getCookie("SIPAI")
  //   console.log(deviceID)
  //   if (deviceID === "") {
  //     const deviceID = Math.random().toString(20).substring(2, 14) + Math.random().toString(20).substring(2, 14);
  //     console.log(deviceID)
  //     setCookie("SIPAI", deviceID, 30)
  //   }
  //   return deviceID
  // }
  

  render() {
        if (this.state.load_page_flag) {
          console.log("load_page_flag")
          return <Navigate to="/LoadVideoPage" replace />
        }

        return (
          <div className="scroll_holder" onScroll={e => this.hide_bar(e)}>
            <div id="body">

              {this.state.hide_flag ? <></> : <Navbar />}


              <div className={this.state.mb_class_flag+"share_story_p1_section"}>
                
                <img src={"/assets/"+this.state.mobile_flag+"dance_step1_bg.webp"} className="share_story_p1_bg"/>
                
                <input className={this.state.mb_class_flag+"input_word"} value={this.state.input_word} onChange={e => this.setState({input_word: e.target.value})} />

                
                  <button className={this.state.mb_class_flag+"next_btn"} onClick={this.getVideo} >
                    {/*<a href="/LoadVideoPage">
                      <img src="/assets/next_btn.svg"/>
                    </a>*/}
                    <img src={(isMobile ? "/assets/next_btn100.png" : "/assets/next_btn.png")} onMouseOver={e => (e.currentTarget.src = "/assets/next_btn100.png")} onMouseOut={e => (e.currentTarget.src = "/assets/next_btn.png")}/>
                  </button>
                
                
                
              </div>



              <Footer />

              <ToastContainer />
      
            </div>
          </div>
        );}
}

export default InputWordPage;
