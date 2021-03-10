
import React, { Component } from 'react'

import './Socials.scss'

class Socials extends Component {

    render() {
        return (
            <div className="socials-cmp flex">
                <a href="mailto:yuvalbeiton@gmail.com?subject=New%20contact%20from%20your%20protfolio" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/YuvalBeitOn" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/yuval-beit-on-2046061b8/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>                            </a>
            </div>
        )
    }
}

export default Socials
