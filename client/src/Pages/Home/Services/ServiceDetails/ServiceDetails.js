import React, { useContext, useEffect, useState } from 'react';
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
  const { _id, serviceName, price, imageURL, description } = service;
  useSetTitle('Service Details');
  const [reviews, setReviews] = useState([]);
  // console.log(service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`https://nurturing-minds-server-side.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [_id]);

  return (
    <div className="service-details-page">
      <div className="container pt-4">
        <Link to="/services" className="mb-4 d-block">
          <Button
            variant="info"
            className="rounded-pill  fw-semibold btn-register text-white"
          >
            Back
          </Button>
        </Link>
        {/* Show Service in Details */}
        <div className="service-details-card card mb-3 ">
          <img src={imageURL} className=" card-img-top" alt="..." />
          <div className="card-body px-4">
            <h3 className="card-title">{serviceName}</h3>
            <p className="card-text">{description}</p>
            <h3 className="py-3">
              Price: <span>{price}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div>
        <DisplayReviews reviews={reviews}></DisplayReviews>
        {user?.email && user?.uid ? (
          <>
            <AddReview
              service={service}
              reviews={reviews}
              setReviews={setReviews}
            ></AddReview>
          </>
        ) : (
          <>
            <h3 className="text-center pb-5 text-white mb-0">
              Please&nbsp;
              <Link to="/login" style={{ color: '#36beca' }}>
                Login
              </Link>
              &nbsp;to add a review.
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
