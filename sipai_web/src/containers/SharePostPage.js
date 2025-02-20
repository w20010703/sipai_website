import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
// import { RWebShare } from "react-web-share";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/SharePostPage.css';

class SharePostPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile_flag: isMobile ? "mb/mb_" : "",
      mb_class_flag: isMobile ? "mb_" : "",
    }

  }
  

  render() {

        return (
            <div id="body">

              <Navbar />


              <div className={this.state.mb_class_flag+"share_story_p3_section"}>
                
                <img src={"/assets/"+this.state.mobile_flag+"dance_step3_bg.webp"} className="share_story_p3_bg"/>

                <div className={this.state.mb_class_flag+"share_btn_holder"}>
                  <a href="https://www.instagram.com/accounts/login/"><img src="/assets/ig_icon_white.svg"/></a>
                  <a href="https://www.facebook.com/"><img src="/assets/fb_icon_white.svg"/></a>
                </div>
                
                <button className={this.state.mb_class_flag+"share_btn"}>
                  <img src="/assets/share_btn.webp"/>
                </button>
                
              </div>



              <Footer />
      
            </div>
        );}
}

export default SharePostPage;
