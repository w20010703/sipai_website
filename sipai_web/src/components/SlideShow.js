import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';

class SlideShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: -1,
            img: this.props.img.reverse(),
            style: this.props.style,
            mb_class_flag: isMobile ? "mb_" : "",
            timer: null
        }

        this.slides = React.createRef();
        this.timer = null;
        this.showSlides = this.showSlides.bind(this)
        this.switchSlides = this.switchSlides.bind(this)
    }

    componentDidMount() {
        this.showSlides();
    }

    showSlides() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        if (this.slides.current) {
            var slides = this.slides.current.children;

            this.state.slideIndex++;

            if (this.state.slideIndex + 1 > this.slides.current.children.length) {this.state.slideIndex = 0}

            for (var i=0;i<this.slides.current.children.length;i++) {
                this.slides.current.children[i].style.display = "none"
            }
            this.slides.current.children[this.state.slideIndex].style.display = "flex";
            // console.log("i: ", this.state.slideIndex)
            if (this.slides.current.children.length > 0) {

                this.setState({
                    slideIndex: this.state.slideIndex
                }, () => {
                    this.timer = setInterval(this.showSlides, 4000);
                })

            }

            
        }
        

    }

    switchSlides(i, next_i) {
        
    }
    
    emptyFunc() {}
    
    render() {

        return (
            <div className="slide_show">
                <div ref={this.slides} onClick={this.props.onClick ? this.props.onClick : this.emptyFunc} className="slideshow-container">
                    {this.state.img.map((item, index) => 
                        <div key={index} className={"mySlides"} style={{backgroundImage: "url(" + item + ")"}} ></div> )}
                    
                </div>
                <div className={this.state.mb_class_flag + "bottom_page_btn_holder"}>
                    <button className={this.state.mb_class_flag + "bottom_page_btn"} onClick={() => this.setState({slideIndex: -1}, this.showSlides)}></button>
                    <button className={this.state.mb_class_flag + "bottom_page_btn"} onClick={() => this.setState({slideIndex: 0}, this.showSlides)}></button>
                    <button className={this.state.mb_class_flag + "bottom_page_btn"} onClick={() => this.setState({slideIndex: 1}, this.showSlides)}></button>
                    <button className={this.state.mb_class_flag + "bottom_page_btn"} onClick={() => this.setState({slideIndex: 2}, this.showSlides)}></button>
                </div>
            </div>
        )};
}

export default SlideShow;