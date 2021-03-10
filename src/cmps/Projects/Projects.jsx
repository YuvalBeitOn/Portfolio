
import React, { Component } from 'react'
import './Projects.scss'
import Socials from '../Socials/Socials'
import tasku from '../../assets/img/app-img/tasku.png';
import musix from '../../assets/img/app-img/musix.png';
import appsus from '../../assets/img/app-img/appsus.png';
import misterToy from '../../assets/img/app-img/misterToy.png';
import misterBitcoin from '../../assets/img/app-img/misterBitcoin.png';

class Projects extends Component {
    state = {
        projects: [
            {
                name: 'TaskU',
                desc: 'A team project management app, based on the Monday app',
                linkTo: 'https://wearetasku.herokuapp.com/#/',
                tools: 'Vue.js, VueX, Node.js, MongoDB',
                img: tasku
            },
            {
                name: 'Musix',
                desc: 'Music player based on the spotify app',
                linkTo: 'https://musix-player.herokuapp.com/#/',
                tools: 'React, Redux, Node.js',
                img: musix
            },
            {
                name: 'Mister Bitcoin',
                desc: 'App that allows to keep track on rates and transfer bitcoins',
                linkTo: 'https://yuvalbeiton.github.io/MrBitcoin-React/#/',
                tools: 'React, Redux, Node.js',
                img: misterBitcoin
            },
            {
                name: 'Appsus',
                desc: 'Productive app that combines mail, notes and books list',
                linkTo: 'https://yuvalbeiton.github.io/appsus/#/',
                tools: 'Vue.js',
                img: appsus
            },
            {
                name: 'Mister Toy',
                desc: 'Online toys store',
                linkTo: 'https://mister-toy-yuval.herokuapp.com/#/',
                tools: 'Vue.js, VueX, Node.js, MongoDB',
                img: misterToy
            }
        ]
    };
    render() {
        const { projects } = this.state;

        return (
            <section className="projects flex column align-center">
                <Socials></Socials>
                <div className="header flex justify-center align-center">
                    <div className="blue-square"></div>
                    <h2>Projects</h2>
                </div>
                <p className="projects-desc">Some of my projects</p>
                <ul className="projects-list clean-list flex column align-center justify-center">
                    {projects.map((project) => (
                        <div className="project-container">
                            <li
                                className="project flex space-between"
                                key={project.name}>
                                <div className="blue-line"></div>
                                <div className="content">
                                    <h4>{project.name}</h4>
                                    <h5>{project.desc}</h5>
                                    <h6>({project.tools})</h6>
                                    <a href={project.linkTo} className="proj-link">
                                        <span>Go to Project</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                                {project.img && <img src={project.img} alt="project-img" />}
                            </li>

                        </div>
                    ))}
                </ul>
            </section>
        )

    }
}

export default Projects
