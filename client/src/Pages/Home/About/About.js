import React from 'react';
import './About.css';
import person from '../../../assets/images/person.jpg';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="home-page-about-section py-5">
      <div className="container py-5">
        <div className="card mb-0 border-0">
          <div className="row g-5">
            <div className="col-md-5">
              <img
                src={person}
                className="img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body py-4">
                <h5 className="card-title">Hi! do you need</h5>
                <h1>Psychological Support ?</h1>
                <div className="d-flex gap-2">
                  <h5 className="card-title fw-bold">I'm Dr. Faruk Hossain,</h5>
                  <small className="mt-1"> (Psychiatrist)</small>
                </div>
                <strong className="fw-semibold d-block pb-2">
                  MBBS, MCPS, MPHIL (Psychiatry), MACP (USA), FRCP (UK)
                </strong>

                <p className="card-text">
                  My mission is to contribute the mental health through quality
                  teaching, training, research, and <strong>services.</strong>
                </p>

                <ul>
                  <li>
                    Offering best possible patient care with updated treatment
                    options
                  </li>
                  <li>
                    Skilled in Biopsychosocial Assessment, Crisis Intervention,
                    Clinical Supervision, Dual Diagnosis and Prevention
                  </li>
                  <li>
                    Obtained professional training extensive rotation in highly
                    reputed psychiatric hospitals and Institutions both home and
                    abroad.
                  </li>
                </ul>
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
                  <strong>Mail me: </strong> hossain07@gmail.com
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
    </div>
  );
};

export default About;
