import React from 'react';
import './About.css';
import person from '../../../assets/images/person.jpg';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container pt-5">
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={person} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Hi! do you need</h5>
              <h1>Psychological Support ?</h1>
              <h5 className="card-title">I'm Doctor KB Arif,</h5>
              <small> Psychiatrist</small>

              <p className="card-text">
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque antium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam Perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                antium, totam rem aperiam, eaque ipsa quae ab illo inventore
              </p>
              <div className="d-flex gap-3 py-4">
                <Link to="https://www.facebook.com/">
                  <FaFacebookSquare size={32} />
                </Link>
                <Link to="https://twitter.com/i/flow/login">
                  <FaTwitterSquare size={32} />
                </Link>
                <Link to="https://www.linkedin.com/login">
                  <FaLinkedin size={32} />
                </Link>
              </div>
              <p>
                <strong>Mail me: </strong> mymail@yourdomail.com
              </p>
              <p>
                <strong>Call me:</strong> +8801254 256 659
              </p>
              <p>
                <strong>Find me here:</strong> Rupayan Trade Center, 3D, Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
