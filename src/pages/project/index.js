import React from 'react';
import Header from '../../components/header';
import linkedInLogo from '../../components/images/linkedInLogo.png';
import githubLogo from '../../components/images/githubLogo.png';
import twitterLogo from '../../components/images/twitterLogo.png';
import './style.css';

function Project() {
    return (
        <div>
            <Header />
            <div className="headerContainer">
                <h1 className="headerContainer-heading">
                    Explore my{' '}
                    <span style={{ color: '#6c63ff' }}>Projects</span> and try
                    them out!
                </h1>
            </div>
            <div className="bodyContainer">
                <div className="bodyContainer-center">
                    <h1>Udemy Clone</h1>
                    <small>Present</small>
                    <p>
                        This is a clone of udemy website. For seeing live use
                        this credential{' '}
                        <strong>
                            email: uttam@gmail.com, password: 12345678
                        </strong>
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="https://serene-engelbart-6b90e8.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/udemy-client"
                            target="_blank"
                        >
                            See client Code
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/udemy-server"
                            target="_blank"
                        >
                            See service Code
                        </a>
                    </div>
                </div>
                <div className="bodyContainer-center">
                    <h1>How well do you know about Sports</h1>
                    <small>Dec, 2021</small>
                    <p>
                        This is a CLI Based quiz app build with{' '}
                        <strong>NodeJS</strong> on the topic of Sports
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="https://replit.com/@UttamPatro/end-game?embed=true#index.js"
                            target="_blank"
                        >
                            Live Project
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/quiz-game"
                            target="_blank"
                        >
                            See Code
                        </a>
                    </div>
                </div>
                <div className="bodyContainer-center">
                    <h1>CRUD Operation</h1>
                    <small>Sep, 2021</small>
                    <p>
                        This project is based on <strong>CRUD</strong> operation{' '}
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="https://vigorous-spence-26d3cf.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/assignment-02"
                            target="_blank"
                        >
                            See Client Code
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/assignment-02-service"
                            target="_blank"
                        >
                            See Service Code
                        </a>
                    </div>
                </div>
                <div className="bodyContainer-center">
                    <h1>Movie Uploader</h1>
                    <small>Sep, 2021</small>
                    <p>
                        In this project we can add movie and we can also watch
                        movie
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="https://confident-yonath-533d7a.netlify.app/"
                            target="_blank"
                        >
                            Live Project
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/assignment-01"
                            target="_blank"
                        >
                            See Client Code
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/assignment-01-service"
                            target="_blank"
                        >
                            See Service Code
                        </a>
                    </div>
                </div>
                <div className="bodyContainer-center">
                    <h1>Twitter Clone</h1>
                    <small>Jul, 2021</small>
                    <p>
                        This is a clone of Twitter website. For seeing live use
                        this credential{' '}
                        <strong>
                            email: uttam@gmail.com, password: 12345678
                        </strong>
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="https://hungry-shaw-1bd676.netlify.app"
                            target="_blank"
                        >
                            Live Project
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/twitter-client"
                            target="_blank"
                        >
                            See Client Code
                        </a>
                        <a
                            className="link link-secondary"
                            href="https://github.com/uttampatro/twitter-server"
                            target="_blank"
                        >
                            See service Code
                        </a>
                    </div>
                </div>
            </div>
            <footer style={{ marginTop: '10px' }} className="footer">
                <div className="footerLogo">
                    <a
                        href="https://www.linkedin.com/in/uttam-patro-28802717a/"
                        className="footerLink"
                    >
                        <img src={linkedInLogo} />
                        LinkedIn
                    </a>
                </div>
                <div className="footerLogo">
                    <a
                        href="https://github.com/uttampatro"
                        className="footerLink"
                    >
                        <img
                            style={{ width: '18px', height: '18px' }}
                            src={githubLogo}
                        />
                        GitHub
                    </a>
                </div>

                <div className="footerLogo">
                    <a
                        href="https://twitter.com/0xUttam"
                        className="footerLink"
                    >
                        <img src={twitterLogo} />
                        Twitter
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Project;
