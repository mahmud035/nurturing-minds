import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import './MyReview.css';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const navigate = useNavigate();
  useSetTitle('My Review');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://nurturing-minds-server-side.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('nurturing-token')}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut()
            .then(() => {})
            .catch((error) => {
              toast.error(error.message.slice(22, -2));
            });
          navigate('/login');
        }

        return res.json();
      })
      .then((data) => {
        toast.error(data.message);
        setMyReviews(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [user?.email, logOut, navigate]);

  // Delete Singe Review
  const handleDeleteReview = (_id) => {
    const agree = window.confirm('Are you sure you want to delete the review?');

    if (agree) {
      fetch(`https://nurturing-minds-server-side.vercel.app/reviews/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success('Review Deleted Successfully');
            const remainingReviews = myReviews.filter(
              (review) => review._id !== _id
            );
            setMyReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div className="my-review-page">
      {myReviews.length === 0 ? (
        <>
          <h1 className="d-flex justify-content-center align-items-center vh-100 text-white">
            No reviews were added
          </h1>
        </>
      ) : (
        <>
          <div className="container py-5">
            <h3 className="text-center text-white py-4">
              See All Of <span style={{ color: 'aqua' }}>Your Reviews</span>
            </h3>

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
        </>
      )}
    </div>
  );
};

export default MyReview;
