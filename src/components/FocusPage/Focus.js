import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Focus = () => {
    const { focus } = useContext(PortfolioContext);

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
            <Container>
                <div className="focus-wrapper">
                    <Title title="Currently focussing on the following skills" />
                    {focus.map((focus) => {
                        const { id, info, info2, url, img } = focus;
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
                                        <div className="focus-wrapper__text">
                                            <h3 className="focus-wrapper__text-title"><strong>{info}</strong></h3>
                                            <br />
                                            <div>
                                                <p className="mb-4">{info2}</p>
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
                                        <div className="focus-wrapper__image">
                                            <a
                                                href={url}
                                                target="_blank"
                                                aria-label="focus Link"
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
                                                        <Image style={{
                                                            marginBottom: "20px"
                                                        }} alt="focus photo" src={img} />
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
            </Container>
        </section>
    );
};

export default Focus;
