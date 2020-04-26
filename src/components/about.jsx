import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p>
                        My name is Jaclyn Bossard. I will soon be graduating with a Bachelor of Science in elementary education K-6. I am interested in a position as an elementary classroom teacher. As an educator, I am dedicated to creating a safe space for all students and being a consistent role model in their lives. In my prior experiences, I have prided myself on the connections and relationships I have built with my students. Creating a learning space with mutual respect is my utmost priority. Throughout my teacher preparation program, I have reflected on my own teaching practices. This has allowed me to create and improve lessons and activities for students. These include guided reading, phonics, social studies, and science along with literacy and mathematics. I have also created a unit focused on animals and their habitats. This unit is integrated into not only science but also literacy stations and writing activities throughout the week. This unit along with other activities I have either created or taught can be found on this site. Please take the time to explore and if you have any further questions or would like to contact my references please reach out by email bossardjaclyn@gmail.com. Thank you for your time in exploring my teaching portfolio.  
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Here are some of my plans and assesments</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Math </h3>
                    <ul>
                        <li>Plans</li>
                        <li>Assesments</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Literacy</h3>
                    <ul>
                        <li>Plans</li>
                        <li>Assesments</li>
                        <li>Videos</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Science &amp; Social Studies</h3>
                    <ul>
                        <li>Plans</li>
                        <li>Assesments</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
