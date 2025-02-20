import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Navbar from '../components/Navbar'
import SlideShow from '../components/SlideShow'
import Footer from '../components/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../css/MainPage.css';

class AboutUsSwitchPage extends Component {
  constructor(props) {
    super(props);
    console.log("isMobile: ", isMobile)
    this.state = {
      page_dict_flag: isMobile ? "mb" : "com",
      mobile_flag: isMobile ? "mb/mb_" : "",
      mb_class_flag: isMobile ? "mb_" : "",
      about_us_index1: "1",
      about_us_index2: "1",
      page_len: isMobile ? "6" : "3",
      page_dict:{
        "com": {
          "1": {
            "1": "about_us_1_1.webp",
            "2": "about_us_1_2.webp",
            "3": "about_us_1_3.webp",
          }, 
          "2": {
            "1": "about_us_2.webp"
          },
          "3": {
            "1": "about_us_3.webp"
          },
          "4": {
            "1": "about_us_4.webp"
          },
          "5": {
            "1": "about_us_5.webp"
          },
          "6": {
            "1": "about_us_6.webp"
          },
          "7": {
            "1": "about_us_7.webp"
          }
        },
        "mb": {
          "1": {
            "1": "mb/mb_about_us_1_1.webp",
            "2": "mb/mb_about_us_1_2.webp",
            "3": "mb/mb_about_us_1_3.webp",
            "4": "mb/mb_about_us_1_4.webp",
            "5": "mb/mb_about_us_1_5.webp",
            "6": "mb/mb_about_us_1_6.webp"
          },
          "2": {
            "1": "mb/mb_about_us_2_1.webp",
            "2": "mb/mb_about_us_2_2.webp"
          },  
          "3": {
            "1": "mb/mb_about_us_3_1.webp",
            "2": "mb/mb_about_us_3_2.webp"
          },  
          "4": {
            "1": "mb/mb_about_us_4_1.webp",
            "2": "mb/mb_about_us_4_2.webp"
          }, 
          "5": {
            "1": "mb/mb_about_us_5_1.webp",
            "2": "mb/mb_about_us_5_2.webp"
          }, 
          "6": {
            "1": "mb/mb_about_us_6_1.webp",
            "2": "mb/mb_about_us_6_2.webp"
          },
          "7": {
            "1": "mb/mb_about_us_7_1.webp",
            "2": "mb/mb_about_us_7_2.webp"
          },
        },
        "mb_list": {
          "1": "mb/mb_about_us_1.webp",
          "2": "mb/mb_about_us_2.webp",
          "3": "mb/mb_about_us_3.webp",
          "4": "mb/mb_about_us_4.webp",
          "5": "mb/mb_about_us_5.webp",
          "6": "mb/mb_about_us_6.webp",
          "7": "mb/mb_about_us_7.webp"
        }
      }
      
    }

    this.switchFigure = this.switchFigure.bind(this)

  }

  setAboutUsBtnIndex(action, idx) {
    console.log("i2, pl", this.state.about_us_index2, this.state.page_len)
    if (action === ">") {
      idx = parseInt(idx) + 1
    }
    else if (action === "<") {
      idx = parseInt(idx) - 1
    }
    return (idx).toString()
    
  }

  switchFigure(idx) {
    console.log("page_len:", Object.keys(this.state.page_dict[this.state.page_dict_flag][idx]).length.toString())
    this.setState({about_us_index1: idx, about_us_index2: "1", page_len: Object.keys(this.state.page_dict[this.state.page_dict_flag][idx]).length.toString()})
  }

  render() {

        return (
          <>
              {!isMobile ? <LazyLoadImage src={"/assets/" + this.state.page_dict["com"][this.state.about_us_index1][this.state.about_us_index2]} className="about_us_bg"/> : <LazyLoadImage src={"/assets/" + this.state.page_dict["mb_list"][this.state.about_us_index1]} className="about_us_bg"/>}
              {!isMobile ? <></> : <LazyLoadImage src={"/assets/" + this.state.page_dict[this.state.page_dict_flag][this.state.about_us_index1][this.state.about_us_index2]} className="mb_about_us_content"/>}

              
              <div className={"switch_page_btn_holder"}>
                {this.state.about_us_index2 !== "1" ? <img src={"/assets/last_btn.png"} className="switch_page_btn" onClick={() => this.setState({about_us_index2: this.setAboutUsBtnIndex("<", this.state.about_us_index2)})}/> : <></>}
                <button className="switch_page_btn temp"></button>
                {this.state.about_us_index2 !== this.state.page_len ? <img src={"/assets/n_btn.png"} className="switch_page_btn" onClick={() => this.setState({about_us_index2: this.setAboutUsBtnIndex(">", this.state.about_us_index2)})}/> : <></>}
              </div>

                <div className={this.state.mb_class_flag + "bottom_page_btn_holder"}>

                  {this.state.page_dict[this.state.page_dict_flag][this.state.about_us_index1] ? Object.entries(this.state.page_dict[this.state.page_dict_flag][this.state.about_us_index1]).map((k) => 
                    <button className={this.state.mb_class_flag + "bottom_page_btn"} onClick={() => {this.setState({about_us_index2: k[0]})}}></button>
                  ) : <></>}
                </div>

                <div className={this.state.mb_class_flag + "about_us_btn_holder"}>
                  <button className={this.state.about_us_index1 === "1" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("1")}></button>
                  <button className={this.state.about_us_index1 === "2" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("2")}></button>
                  <button className={this.state.about_us_index1 === "3" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("3")}></button>
                  <button className={this.state.about_us_index1 === "4" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("4")}></button>
                  <button className={this.state.about_us_index1 === "5" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("5")}></button>
                  <button className={this.state.about_us_index1 === "6" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("6")}></button>
                  <button className={this.state.about_us_index1 === "7" ? this.state.mb_class_flag + "about_us_btn big_btn" : this.state.mb_class_flag + "about_us_btn"} onClick={() => this.switchFigure("7")}></button>
                </div>
          </>
        ) 
  }

}

class MainPage extends Component {

  constructor(props) {
    super(props);
    console.log("isMobile: ", isMobile)
    this.state = {
      mb_class_flag: isMobile ? "mb_" : "",
      mobile_flag: isMobile ? "mb/mb_" : "",
      about_us_index: "1_1",
      news_index: "1",
      news_pic_i: "1",
      previous_y: 0,
      hide_flag: false
    }

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

  

  render() {

        return (
            <div className="scroll_holder" onScroll={e => this.hide_bar(e)}>
              <div id="body">

                {this.state.hide_flag ? <></> : <Navbar />}

                <div className={this.state.mb_class_flag + "banner_section"}>
                  <SlideShow img={["/assets/"+this.state.mobile_flag+"banner_p4.webp", "/assets/"+this.state.mobile_flag+"banner_p3.webp", "/assets/"+this.state.mobile_flag+"banner_p2.webp", "/assets/"+this.state.mobile_flag+"banner_p1.webp"]} img_num={3} arrow_flag={false} logo_flag={false}/>
                </div>

                <div className={this.state.mb_class_flag + "social_media_section"}>
                  <LazyLoadImage src={"/assets/" + this.state.mobile_flag + "social_media_bg.webp"} className="social_media_bg"/>
                  <div className={this.state.mb_class_flag + "social_media_btn_holder"}>
                    <a href="https://page.line.me/sipai">
                      <img src="/assets/line_icon.svg" />
                    </a>
                    <a href="https://www.instagram.com/sipai_studio?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr">
                      <img src="/assets/ig_icon.svg" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553164310596">
                      <img src="/assets/fb_icon.svg" />
                    </a>
                  </div>
                </div>

                <div id="about_us" className={this.state.mb_class_flag + "about_us_section"}>
                  <AboutUsSwitchPage />
                </div>

                <div className={this.state.mb_class_flag + "dance_section"}>
                  <LazyLoadImage src={"/assets/" + this.state.mobile_flag + "dance_bg.webp"} className="dance_bg"/>
                  <a href="/InputWordPage"><img src={"/assets/dance_btn.png"} className={this.state.mb_class_flag + "dance_btn"} /></a>
                </div>

                <div id="news" className={this.state.mb_class_flag + "news_section"}>
                  <LazyLoadImage src={"/assets/" + this.state.mobile_flag + "news_"+this.state.news_index+".webp"} className="news_bg"/>
                  {this.state.news_index === "1" ? 
                  <div className="img_holder">
                    <LazyLoadImage src={"/assets/" + this.state.mobile_flag + "news_p"+this.state.news_pic_i+".webp"}/>
                    <div className="img_switch_holder">
                      {this.state.news_pic_i === "1" && !isMobile ? <LazyLoadImage src={"/assets/news_p1.webp"} className="img_switch_btn" onClick={() => this.setState({news_pic_i: "1"})}/> : <button className="img_switch_btn" onClick={() => this.setState({news_pic_i: "1"})}></button>}
                      {this.state.news_pic_i === "2" && !isMobile ? <LazyLoadImage src={"/assets/news_p2.webp"} className="img_switch_btn" onClick={() => this.setState({news_pic_i: "1"})}/> : <button className="img_switch_btn" onClick={() => this.setState({news_pic_i: "2"})}></button>}
                      {this.state.news_pic_i === "3" && !isMobile ? <LazyLoadImage src={"/assets/news_p3.webp"} className="img_switch_btn" onClick={() => this.setState({news_pic_i: "1"})}/> : <button className="img_switch_btn" onClick={() => this.setState({news_pic_i: "3"})}></button>}
                    </div>
                  </div> : <></>}


                  {!isMobile ? <div className={this.state.mb_class_flag + "switch_page_btn_holder"}>
                    {this.state.news_index !== "1" ? <button className="switch_page_btn" onClick={() => this.setState({news_index: "1"})}></button> : <></>}
                    <button className="switch_page_btn temp"></button>
                    {this.state.news_index !== "2" ? <button className="switch_page_btn" onClick={() => this.setState({news_index: "2"})}></button> : <></>}
                  </div>:<></>}
                  <a className={this.state.mb_class_flag + "info_btn_holder"} href={this.state.news_index === "1" ? "https://myship.7-11.com.tw/general/detail/GM2311237155723" : "https://line.me/S/sticker/25081694"}></a>
                  <div className={"bottom_page_btn_holder"}>
                    <button className="bottom_page_btn" onClick={() => this.setState({news_index: "1"})}></button>
                    <button className="bottom_page_btn" onClick={() => this.setState({news_index: "2"})}></button>
                  </div>
                  
                </div>

                <div id="collaborate" className={this.state.mb_class_flag + "collaborate_section"}>
                  <LazyLoadImage src={"/assets/" + this.state.mobile_flag + "collaborate_bg.webp"} className="collaborate_bg"/>
                  <a href="https://www.instagram.com/sipai_studio?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"><img src={"/assets/contact_us_btn.png"} className={this.state.mb_class_flag + "contact_us_btn"} /></a>
                  <a href="mailto: contact@minimax.com.tw"><img src={"/assets/email_us_btn.png"} className={this.state.mb_class_flag + "email_us_btn"} /></a>
                </div>

                <Footer />
        
              </div>
            </div>
        );}
}

export default MainPage;
