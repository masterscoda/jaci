import React, { Component } from 'react';

export default class Sidebar extends Component { 
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <img className="author-img" src={require("../images/img3.jpg")} />
              <h1 id="colorlib-logo"><a href="index.html">Jaclyn Bossard</a></h1>
              {/* <span className="email"><i className="icon-mail"></i>jjboss12@gmail.com</span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#" data-nav-section="subjects">Plans &amp; Assesments</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jaclyn-bossard-4271301a6/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="mailto: bossardjaclyn@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail"></i></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
