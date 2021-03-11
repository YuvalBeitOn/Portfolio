
import React, { Component } from 'react'
import './AppFooter.scss'

class AppFooter extends Component {

    render() {
        return (
            <section className="app-footer flex align-center space-between">
                <p className="copyrights">© 2021 by Yuval Beit On.</p>
                <div className="contact flex">
                    <div className="call flex column align-center">
                        <span>Call</span>
                        <p> +972508880050</p>
                    </div>
                    <div className="write flex column align-center">
                        <span>Write</span>
                        <p>yuvalbeiton@gmail.com</p>
                    </div>
                    <div className="follow flex column align-center">
                        <span>Follow</span>
                        <section className="socials flex align-center justify-center">
                            <a href="https://www.linkedin.com/in/yuval-beit-on-2046061b8/" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i>                            </a>
                            <a href="https://www.facebook.com/yuval.beiton/" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/yuval_beiton/" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i></a>
                        </section>
                    </div>
                </div>
            </section>
        )

    }
}

export default AppFooter
