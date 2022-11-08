import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../assets/images/banner.jpg';
import banner2 from '../../../assets/images/banner2.jpg';
import banner3 from '../../../assets/images/banner3.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-img">
            <img className="d-block w-100" src={banner} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div className="slide-content">
              <h3 className="fs-1 fw-bold">
                LIFE IS NOT FOR A MOMENT,
                <br />
                BUT IT'S A COMBINATION OF
                <br />
                MOMENTS
              </h3>
              <Link to="/book-session">
                <Button variant="dark">Book Session</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </div>

          <Carousel.Caption>
            <div className="slide-content">
              <h3 className="fs-1 fw-bold">
                THINK POSITIVE AND LIVE POSITIVE <br />
                LIFE WITH HAPPINESS
              </h3>
              <Link to="/book-session">
                <Button variant="dark">Book Session</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
          </div>

          <Carousel.Caption>
            <div className="slide-content">
              <h3 className="fs-1 fw-bold">
                MAKE YOUR LIFE GOOD NOT ONLY <br /> OUTSIDE BUT ALSO INSIDE
              </h3>
              <Link to="/book-session">
                <Button variant="dark">Book Session</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
