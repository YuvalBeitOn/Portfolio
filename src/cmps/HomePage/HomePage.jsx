
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import myCv from '../../assets/YuvalBeitOnCV.docx'
import './HomePage.scss'
import me from '../../assets/img/profile.jpg'
class _HomePage extends Component {

    render() {
        return (
            <section className="home-page flex justify-center align-center">
                <div className="inner-square flex ">
                    <div className="about-me flex column align-center" data-aos="flip-left" data-aos-duration="1200">
                        <img src={me} alt="my photo"></img>
                        <h1>Yuval Beit On</h1>
                        <div className="seperator"></div>
                        <h2>FullStack | Frontend Developer</h2>
                        <div className="socials flex align-center justify-center">
                            <a href="https://github.com/YuvalBeitOn" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yuval-beit-on-2046061b8/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i>                            </a>
                            <a href="https://www.facebook.com/yuval.beiton/" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="mailto:yuvalbeiton@gmail.com?subject=New%20contact%20from%20your%20protfolio" target="_blank" rel="noreferrer">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="left-side flex column justify-center" data-aos="flip-right" data-aos-duration="1200">
                        <p className="hello">Hello</p>
                        <p className="sec-p">Here's who I am & what I do</p>
                        <div className="btns-container">
                            <a className="btn resume" href={myCv} download="Yuval Beit On CV"><span>RESUME</span></a>
                            <NavLink className="btn projects" to="/projects" activeClassName="active-page" exact>PROJECTS</NavLink>
                        </div>
                        <NavLink className="to-about    flex align-center" to="/about" activeClassName="active-page" exact>
                            <span>Nice To Meet You</span>
                            <i className="fas fa-arrow-right"></i>
                        </NavLink>
                    </div>
                </div>
            </section>
        )

    }
}

export default withRouter(_HomePage);
