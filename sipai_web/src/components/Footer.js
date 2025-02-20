import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import '../css/MainPage.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mb_class_flag: isMobile ? "mb_" : "",
      mobile_flag: isMobile ? "mb/mb_" : ""
    }
  }

  render() {

        return (
          <div className={this.state.mb_class_flag+"footer_section"}>
            <div className="footer_img_holder">
              <img src={"/assets/"+ this.state.mobile_flag +"footer_bg.webp"} className="footer_bg"/>
              <img src={"/assets/rainbow.webp"} className="rainbow_bg"/>
            </div>
            <div className={this.state.mb_class_flag + "footer_btn_holder"}>
              <button className="social_media_btn">
                <a href="https://page.line.me/sipai">
                  <img src="/assets/line_icon_white.svg" />
                </a>
              </button>
              <button className="social_media_btn">
                <a href="https://www.instagram.com/sipai_studio?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
                  <img src="/assets/ig_icon_white.svg" />
                </a>
              </button>
              <button className="social_media_btn">
                <a href="https://www.facebook.com/profile.php?id=61553164310596">
                  <img src="/assets/fb_icon_white.svg" />
                </a>
              </button>
              {/*<button className="social_media_btn">
                <img src="/assets/youtube_icon_white.svg" />
              </button>
              <button className="social_media_btn">
                <img src="/assets/phone_icon_white.svg" />
              </button>*/}
              <button className="social_media_btn">
                <a href="mailto: contact@minimax.com.tw">
                  <img src="/assets/email_icon_white.svg" />
                </a>
              </button>
            </div>
          </div>
        );}
}

export default Footer;
