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
                        I have been actively self-teaching programming since
                        last six months and I have learned and played around
                        with big projects on GitHub and taught myself to build a
                        full stack application on ReactJs, NodeJS (Typescript)
                        and have worked with MongoDB and PostgreSQL for data
                        store. And built multiple projects on this tech stack &
                        I am very much resilient to learn and adapt new
                        technologies.
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
                    <Link className="link link-primary " to="/projects">
                        See Projects
                    </Link>
                </div>
            </div>
            <footer className="footer">
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

export default Home;
