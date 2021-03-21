import React,{useEffect, useState } from 'react'
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Row, Col, Image } from "react-bootstrap";
const ProjectDetails = ({title, info, info2, url, repo, img, id}) => {
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
        <div>
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
                        <p>{info}</p>
                        <p className="mb-4">{info2 || ""}</p>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || "#!"}
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
                {img && <Col lg={8} md={8} sm={10}>
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
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <Image
                              className="project__image"
                              alt="project photo"
                              src={img}
                            />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>}
              </Row>
        </div>
    )
}

export default ProjectDetails
