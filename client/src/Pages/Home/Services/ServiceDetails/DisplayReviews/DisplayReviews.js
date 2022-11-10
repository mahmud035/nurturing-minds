import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './DisplayReviews.css';

const DisplayReviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  const { _id } = service;

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
    <div className="container">
      <div className="text-center py-5">
        <h2>Clients's Review</h2>
        <p>See What Other People Say About This Service</p>
      </div>

      <div className="review-card-container pb-5">
        {reviews?.map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default DisplayReviews;
