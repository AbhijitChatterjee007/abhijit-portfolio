import React, { useContext, useEffect, useState } from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Certificates() {

    const { certificates } = useContext(PortfolioContext);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="certificates" id="certificates">
            <Container className="certificates__container">
                <Title title="Certificates" />
                <Carousel className="certificates__carousel" activeIndex={index} onSelect={handleSelect}>
                    {certificates.map((certificate) => {
                        const { id, img, url, info } = certificate;
                        return (
                            <Carousel.Item>
                                <a href={url}
                                    target="_blank"
                                    aria-label="certificate Link"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className="d-block w-100"
                                        src={img}
                                        alt={`${id}-slide`}
                                    />
                                </a>
                                <Carousel.Caption>
                                    <h5 className="title">{info} <p style= {{color: "black"}}> Click to view actual certificate</p></h5>
                                </Carousel.Caption>
                            </Carousel.Item>

                        );
                    })}
                </Carousel>
            </Container>
        </section>
    )
}

export default Certificates
