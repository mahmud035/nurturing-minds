import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import './MyReview.css';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useSetTitle('My Review');

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user?.email]);

  const handleDeleteReview = (_id) => {
    const agree = window.confirm('Are you sure you want to delete the review?');

    if (agree) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success('Deleted Successfully');
            const remainingReviews = myReviews.filter(
              (review) => review._id !== _id
            );
            setMyReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div className="container">
      <h3 className="text-center py-4">My Reviews: {myReviews.length}</h3>

      <div className="review-card-container pb-5">
        {myReviews?.map((review, index) => (
          <MyReviewCard
            key={index}
            review={review}
            handleDeleteReview={handleDeleteReview}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
