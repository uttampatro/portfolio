import React from 'react';
import Header from '../../components/header';
import linkedInLogo from '../../components/images/linkedInLogo.png';
import githubLogo from '../../components/images/githubLogo.png';
import twitterLogo from '../../components/images/twitterLogo.png';
import './style.css';

function Blogs() {
    return (
        <div>
            <Header />
            <div className="headerContainer">
                <h1 className="headerContainer-heading">
                    Read my <span style={{ color: '#6c63ff' }}>Blogs</span>
                </h1>
            </div>
            <div className="bodyContainer">
                <div className="bodyContainer-center">
                    <h1>dummy blog one</h1>
                    <small>November, 2020</small>
                    <p>
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language which
                        more or less corresponds to 'proper' Latin. It contains
                        a series of real Latin words.
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="/blog?id=1"
                        >
                            Read More
                        </a>
                    </div>
                </div>
                <div className="bodyContainer-center">
                    <h1>second dummy blog</h1>
                    <small>November, 2020</small>
                    <p>
                        Dummy text: Its function as a filler or as a tool for
                        comparing the visual impression of different typefaces
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content. This is
                        required when, for example, the final text is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <div className="linkContainer">
                        <a
                            className="link link-primary"
                            href="/blog?id=2"
                        >
                            Read More
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

export default Blogs;
