import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);
  console.log(experience);

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
    <section className="experience" id="experience">
      <Fade bottom duration={1000} delay={1000} distance="30px">
        <p className="hero-cta">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
              </Link>
        </p>
      </Fade>
      <Container>
        <div className="experience-wrapper">
          <Title title="Work Experience" />
          {experience.map((experience) => {
            const { title, info, date, url, img, id } = experience;
            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="experience-wrapper__text">
                      <h3 className="experience-wrapper__text-title">{title}</h3>
                      <div>
                        <p className="text-muted">
                          {date}
                        </p>
                        <p className="mb-4">{info || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} md={8} sm={10}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="experience-wrapper__image">
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
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
                          <div data-tilt className="thumbnail rounded">
                            <Image alt="experience photo" src={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <p className="hero-cta justify-content-center">
            <Link className="cta-btn cta-btn--hero" to="/">
              Go back
              </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Experience;
