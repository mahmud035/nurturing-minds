import React from 'react';
import './MyReviewCard.css';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, handleDeleteReview }) => {
  const { _id, userName, userEmail, serviceName, photoURL, description } =
    review;
  // console.log(review);

  return (
    <div>
      <Card className="review-card h-100">
        <div className="p-3 d-flex gap-3">
          <Image
            roundedCircle
            src={photoURL}
            style={{ width: '60px', height: '60px' }}
          ></Image>
          <div>
            <h6>
              <FaUser size={16} className="me-1" /> {userName}
            </h6>
            <p>
              <MdEmail size={16} className="me-2" /> {userEmail}
            </p>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <div className="d-flex gap-3">
            <Link to={`/edit/${_id}`}>
              <Button
                variant="info"
                className="fw-semibold btn-register text-white"
              >
                Edit Review
              </Button>
            </Link>
            <Button
              onClick={() => handleDeleteReview(_id)}
              variant="danger"
              className="btn-delete fw-semibold text-white"
            >
              Delete Review
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyReviewCard;
