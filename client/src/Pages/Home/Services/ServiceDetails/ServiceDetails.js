import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../../../hooks/useSetTitle';
import AddReview from './AddReview/AddReview';
import DisplayReviews from './DisplayReviews/DisplayReviews';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const service = useLoaderData() || {};
  const { user } = useContext(AuthContext);
  const { serviceName, price, imageURL, description } = service;
  useSetTitle('Service Details');
  // console.log(service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container pt-4">
        <Link to="/services" className="mb-4 d-block">
          <Button variant="info" size="sm">
            Back
          </Button>
        </Link>
        <div className="service-details-card card mb-3">
          <img src={imageURL} className=" card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{serviceName}</h5>
            <p className="card-text">{description}</p>
            <h3 className="py-3">
              Price: <span>{price}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div>
        <DisplayReviews service={service}></DisplayReviews>
        {user?.email && user?.uid ? (
          <>
            <AddReview service={service}></AddReview>
          </>
        ) : (
          <>
            <h5 className="text-center pb-4">
              Please <Link to="/login">Login</Link> to add a review.
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
