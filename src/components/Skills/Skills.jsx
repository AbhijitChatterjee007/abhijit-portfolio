import React, { useState, useEffect } from "react";
import { Container, Card, CardDeck, Image, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';

// skills
import { skills } from "../../data/skillsData";

export const Skills = () => {

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="skills">
      <Container className="pt-3 pb-3 container">
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <div className="skills__introButtons">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/certifications">
                Want to view Certifications?
              </Link>
            </p>
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/focus">
                Current Focus!
              </Link>
            </p>
          </div>
        </Fade>
        <Title title="Skills" />
        <CardDeck className="cardDeck">
          <Row className="d-flex justify-content-center">
          {(Object.keys(skills)).map( skill =>
            <Col md={7} lg={7}>
              <Card className="focus thumbnail rounded mt-2 mb-2">
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >

                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <Card.Body>
                      <h4 className="title">{skill}</h4>
                      <hr />
                      <Card.Text className="card-text d-flex flex-column">
                        {skills[skill].map((skill, index) => (
                          <span className="p-2" key={index}>
                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                              <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style"></Image><strong>{skill.skillName}</strong>
                            </a>
                          </span>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Tilt>
                </Fade>

              </Card>
            </Col>
            )})
          </Row>
        </CardDeck>
      </Container>
    </section>
  );
};

export default Skills;
