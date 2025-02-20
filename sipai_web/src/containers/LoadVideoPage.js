import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import copy from "copy-to-clipboard";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { setCookie, getCookie } from "../cookie_utils";

import '../css/LoadVideoPage.css';

class LoadVideoPage extends Component {

  constructor(props) {
    super(props);
    const min = 1;
    const max = 98;
    const rand = parseInt(min + Math.random() * (max - min));

    this.reply = React.createRef();

    this.state = {
      share_page_flag: false,
      msg: getCookie("SIPAI_REPLY"),
      msg_top: isMobile ? "54.12vw" : "17.1vw",
      mobile_flag: isMobile ? "mb/mb_" : "",
      mb_class_flag: isMobile ? "mb_" : "",
      random: rand,
      word_display_flag: false
    }

    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.hide_bar = this.hide_bar.bind(this)
    this.displayWord = this.displayWord.bind(this)
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

  //Function to add text to clipboard
  copyToClipboard() {
    // Text from the html element
    let copyText = this.state.msg;
    // Adding text value to clipboard using copy function
    let isCopy = copy(copyText);

    //Dispalying notification
    if (isCopy) {
      toast("成功複製心情小語和下載影片！", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  }

  displayWord() {
    this.setState({
      word_display_flag: true
    }, () => {
      this.reply.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  render() {
        // if (this.state.share_page_flag) {
        //   console.log("share_page_flag")
        //   return <Navigate to="/SharePostPage" replace />
        // }

        return (
          <div className="scroll_holder" onScroll={e => this.hide_bar(e)}>
            <div id="body">

              {this.state.hide_flag ? <></> : <Navbar />}


              <div className={this.state.mb_class_flag+"share_story_p2_section"}>
                
                <img src={"/assets/"+this.state.mobile_flag+"dance_step2_bg.webp"} className="share_story_p2_bg"/>
                
                <div className={this.state.mb_class_flag+"dino_dance_section"}>
                  <video ref={this.reply} src={"/video/dance_music_"+this.state.random+".mp4"} muted autoPlay onEnded={this.displayWord}/>
                  <audio autoPlay src={"/video/dance_music_"+this.state.random+".mp4"}></audio>
                </div>


                {this.state.word_display_flag ? <>
                  <div className={this.state.mb_class_flag+"reply_section"} style={{marginTop: this.state.msg_top}}>
                    <img className={this.state.mb_class_flag+"bot_icon"} src="/assets/bot_icon.svg" />
                    <img className={this.state.mb_class_flag+"bot_reply_bg"} src={"/assets/"+this.state.mobile_flag+"bot_bg.svg"} />
                    <p className={this.state.mb_class_flag+"bot_reply_msg"}>{this.state.msg}</p>
                    <a
                      target="_blank"
                      href={"/video/dance_music_"+this.state.random+".mp4"}
                      rel="noreferrer"
                      download
                    >
                      <button className={this.state.mb_class_flag+"copy_btn"} onClick={this.copyToClipboard}>複製</button>
                    </a>
                  </div>

                  
                  
                  <p className={this.state.mb_class_flag+"msg_holder"}>[複製心情小語，可搭配下載影片]<br />分享影片</p>
                  <div className={this.state.mb_class_flag+"share_btn_holder"}>
                    <a href="https://www.instagram.com/accounts/login/"><img src="/assets/ig_icon.svg"/></a>
                    <a href="https://www.facebook.com/"><img src="/assets/fb_icon.svg"/></a>
                  </div>
                  </>
                :
                  <></>}
                {/*<button className={this.state.mb_class_flag+"go_to_share_btn"} onClick={() => this.setState({share_page_flag: true})}>
                  
                    <img src={(isMobile ? "/assets/next_btn100.png" : "/assets/next_btn.png")} onMouseOver={e => (e.currentTarget.src = "/assets/next_btn100.png")} onMouseOut={e => (e.currentTarget.src = "/assets/next_btn.png")}/>
                  </a>
                </button>*/}

                
               
                
              </div>



              <Footer />

              <ToastContainer />
      
            </div>
          </div>
        );}
}

export default LoadVideoPage;
