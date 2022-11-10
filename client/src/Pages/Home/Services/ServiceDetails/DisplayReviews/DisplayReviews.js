import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './DisplayReviews.css';

const DisplayReviews = ({ reviews }) => {
  return (
    <div className="container py-5">
      <div className="text-center py-5 text-white">
        <h2 className="fs-1">
          Clients's <span style={{ color: 'aqua' }}>Review</span>
        </h2>
        <p className="text-white-50">
          See What Other People Say About This Service
        </p>
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
