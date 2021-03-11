
import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import './AppHeader.scss'

class _AppHeader extends Component {

    state = {
        isMenuOpen: false
    }

    toggleNav = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    render() {
        return (
            <header className="app-header flex space-between align-center">
                <div className="left-side flex align-center">
                    <div className="blue-square"></div>
                    <NavLink to="/" activeClassName="active-page" exact>
                        <h1 name="Home">Yuval Beit On</h1>
                    </NavLink>                    
                    <p>/ FullStack | Frontend Developer</p>
                </div>
                <div className="right-side">
                    <button onClick={this.toggleNav} className="bars">
                        <i className="fas fa-bars"></i>
                    </button>
                    <nav className={"nav-bar flex align-center " + (this.state.isMenuOpen ? "showen" : null)}>
                        <button className={"close-btn " + (this.state.isMenuOpen ? "showen" : null)} onClick={this.toggleNav}><i className="fas fa-times"></i></button>
                        <NavLink to="/" activeClassName="active-page" exact>
                            <span name="Home">HOME</span>
                        </NavLink>
                        <NavLink to="/about" activeClassName="active-page" exact>
                            <span name="About">ABOUT</span>
                        </NavLink>
                        <NavLink to="/projects" activeClassName="active-page" exact>
                            <span name="Portfolio">PROJECTS</span>
                        </NavLink>
                        {/* <NavLink to="/contact" activeClassName="active-page" exact>
                            <span name="Contact">CONTACT</span>
                        </NavLink> */}
                    </nav>
                </div>
            </header>
        )

    }
}

export default withRouter(_AppHeader);
