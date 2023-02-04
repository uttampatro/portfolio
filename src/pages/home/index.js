import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import imageLogo from '../../components/images/imageLogo.svg';
import linkedInLogo from '../../components/images/linkedInLogo.png';
import githubLogo from '../../components/images/githubLogo.png';
import twitterLogo from '../../components/images/twitterLogo.png';
import './style.css';

function Home() {
    return (
        <div>
            <div className="container">
                <Header />
                <img
                    className="imageLogo"
                    src={imageLogo}
                    width="500"
                    height="500"
                />
                <h1>
                    Uttam <span className="span">/Web_Developer</span>
                </h1>
            </div>
            <div className="section">
                <div className="container-center">
                    <h2>/technologies</h2>
                    <p>
                        I am a full stack developer, primarily works on
                        javascript tech stack - node.js, react.js and have been
                        actively shipping multiple projects in
                        Node/React/MongoDB stack.
                    </p>
                </div>
            </div>
            <div className="projectSection">
                <div className="container-center">
                    <h2>/projects</h2>
                    <p>
                        I like to showcase my work and thus, you can see my
                        projects hosted online
                    </p>
                    <a className="link link-primary1" href="/projects">
                        See Projects
                    </a>
                </div>
            </div>
            <div className="section">
                <div className="container-center">
                    <h2>/blogs</h2>
                    <p>
                        I am also working on some technical and non techincal
                        blogs. I like to document my journey of learning.
                    </p>
                    <a className="link link-primary1" href="/blogs">
                        See Blogs
                    </a>
                </div>
            </div>
            <footer className="footer">
                <div className="footerLogo">
                    <a
                        href="https://www.linkedin.com/in/uttam-patro-28802717a/"
                        className="footerLink"
                        target="_blank"
                    >
                        <img src={linkedInLogo} />
                        LinkedIn
                    </a>
                </div>
                <div className="footerLogo">
                    <a
                        href="https://github.com/uttampatro"
                        className="footerLink"
                        target="_blank"
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
                        href="https://twitter.com/uttxmpatro"
                        className="footerLink"
                        target="_blank"
                    >
                        <img src={twitterLogo} />
                        Twitter
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
