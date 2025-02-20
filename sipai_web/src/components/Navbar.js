import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Footer from './Footer'

import '../css/MainPage.css';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobile_flag: isMobile ? "mb/mb_" : "",
      mb_class_flag: isMobile ? "mb_" : "",
      mb_nav_flag: false,
    }
  }

  render() {

        return (
          <div className={this.state.mb_class_flag + "nav_section slideIn"}>
            <div className="nav_img_holder">
              <img src={"/assets/rainbow.webp"} className="rainbow_bg"/>
              <img src={"/assets/"+ this.state.mobile_flag +"nav_bg.webp"} className={this.state.mb_class_flag + "nav_bg"}/>
            </div>
            {isMobile ? <button className="mb_menu_btn" onClick={() => this.setState({mb_nav_flag: true})}><img src={"/assets/mb/mb_menu_btn.svg"} /></button> :
            <div className="nav_btn_holder">
              <a className="nav_btn" href="/">首頁</a>
              <a className="nav_btn" href="/#about_us">關於</a>
              <a className="nav_btn" href="/InputWordPage" id="dance_link">互動</a>
              <a className="nav_btn" href="/#news">周邊</a>
              <a className="nav_btn" href="/#collaborate">合作</a>
            </div>
             }
            {isMobile && this.state.mb_nav_flag? <div className="mb_nav_btn_holder">
              <img className="mb_close_btn" src="/assets/mb/mb_nav_close_btn.svg" onClick={() => this.setState({mb_nav_flag: false})}/>
              <a className="mb_nav_btn" href="/">首頁</a>
              <a className="mb_nav_btn" href="/#about_us">關於</a>
              <a className="mb_nav_btn" href="/InputWordPage">互動</a>
              <a className="mb_nav_btn" href="/#news">周邊</a>
              <a className="mb_nav_btn" href="/#collaborate">合作</a>
              <Footer />
            </div> : <></>}
          </div>
        );}
}

export default NavBar;
