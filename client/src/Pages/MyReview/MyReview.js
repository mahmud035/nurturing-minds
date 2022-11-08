import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import './MyReview.css';

const MyReview = () => {
  useSetTitle('My Review');
  return (
    <div>
      <p>My Review</p>
    </div>
  );
};

export default MyReview;
