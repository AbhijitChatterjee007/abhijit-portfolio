import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section className="projects" id="projects">
      <Fade bottom duration={1000} delay={1000} distance="30px">
        <p className="hero-cta">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
              </Link>
        </p>
      </Fade>
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
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
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>
                          {info}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {url && (<a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
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
                    <div className="project-wrapper__image">
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
                            <Image alt="project photo" src={img} />
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

export default Projects;
