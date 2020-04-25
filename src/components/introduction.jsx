import React, { Component } from 'react'
import '../App.css';

export default class Introduction extends Component {
  constructor() {
    super();
    this.images = {
      img1: require("../images/teaching1.jpg")
    }
  }

  componentDidMount(){
    this.images.img1 = require("../images/teaching1.jpg");
  }

  render() {
    return (
      <div>
        <section id="colorlib-hero"  data-section="home">
          <div className="flexslider">
            <ul className="slides">
              <li className="img-list">
                <div className="overlay" />
                <div className="container-fluid">
                <div className="row">
                  <img className="author-img" src={require("../images/teaching5.jpg")} />
                  </div>
                </div>
              </li>
              <li className="img-list2">
                <div className="overlay" />
                <div className="container-fluid">
                <div className="row">
                  <img className="intro-img" src={require("../images/teaching6.jpg")} />
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
