import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  var pathname = `${useLocation().pathname}`;
  console.log(pathname);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to={pathname} smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} {' '}
          <a href="https://github.com/AbhijitChatterjee007" target="_blank" rel="noopener noreferrer">
          Abhijit Chatterjee
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
