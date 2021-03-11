
import React, { Component } from 'react'
import Socials from '../Socials/Socials'

import './About.scss'

class About extends Component {

    render() {
        return (
            <section className="about-page flex column justify-center align-center">
                <Socials></Socials>
                <div className="header flex justify-center align-center">
                    <div className="blue-square"></div>
                    <h2>About Me</h2>
                </div>
                <div className="main-text flex justify-center column wrap">
                    <p>
                        <span className="hi">Hi,</span> My name is Yuval, I'm 24 years old, from Israel.
							</p>
                    <p>
                        Programming has always interested and attracted me,
                        this good feeling you have when you create new things.
                        At the end of the day, you have created something that didn’t exist that morning, and this is the most satisfying feeling.
							</p>
                    <p>
                        I like that you are always learning and challenging yourself, if it’s learning a new programming language, a new framework, or trying to solve a problem you haven’t encountered before, you are always stretching your mind.
							</p>
                    <p>I want to be a part of this passionate community of programmers, and more than that, a part of something good. </p>
                    <br></br>
                    <p>
                        <span className="skills">My top skills:</span> Vue.js, VueX, React, Angular, Redux, Node.js, MongoDB, REST API's, CSS & SASS, Git
							workflow and more, and I am always trying to learn new things, refresh the knowledge I have, and deepen my understanding.
						</p>
                    <p>I have a lot of motivation and ability to learn and invest in anything I take part in.</p>
                </div>
            </section>
        )

    }
}

export default About
