import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import profile from '../../images/profile.jpg'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Image className="rounded shadow-lg about-wrapper__imageElement" alt="profile picture" src= {profile} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree}
                </p>
                <p className="d-flex mt-3 buttons">
                  <span className="about-wrapper__info-btn">
                    <Link className="cta-btn cta-btn--about" to="projects">
                      Projects
                  </Link>
                  </span>
                  <span className="about-wrapper__info-btn">
                    <Link className="cta-btn cta-btn--about" to="skills">
                      Skills
                    </Link>
                  </span>
                  <span className="about-wrapper__info-btn">
                    <Link className="cta-btn cta-btn--about" to="experience">
                      Experience
                    </Link>
                  </span>
                  <span className="about-wrapper__info-btn">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--about"
                      href={resume}
                    >Resume
                    </a>
                  </span>
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
