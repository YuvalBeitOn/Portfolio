
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import './AppHeader.scss'

class _AppHeader extends Component {

    render() {
        return (
            <header className="app-header flex space-between align-center">
                <div className="left-side flex align-center">
                    <div className="blue-square"></div>
                    <h1>Yuval Beit On</h1>
                    <p>/ FullStack | Frontend Developer</p>
                </div>
                <div className="right-side">
                    <nav>
                        <NavLink to="/" activeClassName="active-page" exact>
                            <span name="Home">HOME</span>
                        </NavLink>
                        <NavLink to="/about" activeClassName="active-page" exact>
                            <span name="About">ABOUT</span>
                        </NavLink>
                        <NavLink to="/projects" activeClassName="active-page" exact>
                            <span name="Portfolio">PROJECTS</span>
                        </NavLink>
                        <NavLink to="/contact" activeClassName="active-page" exact>
                            <span name="Contact">CONTACT</span>
                        </NavLink>
                    </nav>
                </div>
            </header>
        )

    }
}

export default withRouter(_AppHeader);
