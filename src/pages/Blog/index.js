import React from 'react';
import Header from '../../components/header';
import linkedInLogo from '../../components/images/linkedInLogo.png';
import githubLogo from '../../components/images/githubLogo.png';
import twitterLogo from '../../components/images/twitterLogo.png';
import './style.css';

function Blog() {
    return (
        <div>
            <Header />
            <div className="headerContainer">
                <h1 className="headerContainer-heading">
                    This is my dummy{' '}
                    <span style={{ color: '#6c63ff' }}>Blog</span>
                </h1>
            </div>
            <div className="bodyContainer">
                <div className="bodyContainer-center1">
                    <p>
                        Dummy text: Its function as a filler or as a tool for
                        comparing the visual impression of different typefaces
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content. This is
                        required when, for example, the final text is not yet
                        available. Dummy text is also known as 'fill text'. It
                        is said that song composers of the past used dummy texts
                        as lyrics when writing melodies in order to have a
                        'ready-made' text to sing with the melody. Dummy texts
                        have been in use by typesetters since the 16th century.
                    </p>
                </div>
                <div className="bodyContainer-center1">
                    <h2 style={{ paddingBottom: '10px' }}>
                        Incomprehensibility or readability? That is the
                        question.
                    </h2>
                    <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical. Due to its
                        widespread use as filler text for layouts,
                        non-readability is of great importance: human perception
                        is tuned to recognize certain patterns and repetitions
                        in texts. If the distribution of letters and 'words' is
                        random, the reader will not be distracted from making a
                        neutral judgement on the visual impact and readability
                        of the typefaces (typography), or the distribution of
                        text on the page (layout or type area). For this reason,
                        dummy text usually consists of a more or less random
                        series of words or syllables. This prevents repetitive
                        patterns from impairing the overall visual impression
                        and facilitates the comparison of different typefaces.
                        Furthermore, it is advantageous when the dummy text is
                        relatively realistic so that the layout impression of
                        the final publication is not compromised.
                    </p>
                </div>
                <div className="bodyContainer-center1">
                    <h2 style={{ paddingBottom: '10px' }}>
                        Incomprehensibility or readability? That is the
                        question.
                    </h2>
                    <p>
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language which
                        more or less corresponds to 'proper' Latin. It contains
                        a series of real Latin words. This ancient dummy text is
                        also incomprehensible, but it imitates the rhythm of
                        most European languages in Latin script. The advantage
                        of its Latin origin and the relative meaninglessness of
                        Lorum Ipsum is that the text does not attract attention
                        to itself or distract the viewer's attention from the
                        layout.
                    </p>
                </div>
            </div>

            <footer style={{ marginTop: '10px' }} className="footer">
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
                        target="_blank"
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

export default Blog;
