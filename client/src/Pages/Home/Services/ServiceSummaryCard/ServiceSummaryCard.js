import React from 'react';
import './ServiceSummaryCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceSummaryCard = ({ service }) => {
  const { _id, serviceName, price, imageURL, description } = service;

  return (
    <PhotoProvider>
      <div>
        <Card className="service-summary-card h-100 pb-2">
          <PhotoView src={imageURL} key={_id}>
            <Card.Img variant="top" src={imageURL} />
          </PhotoView>

          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text>{`${description.slice(0, 95)}...`}</Card.Text>
            <h3>
              Price: <span>{price}</span>
            </h3>
            <Link to={`/services/${_id}`}>
              <Button
                variant="info"
                className="rounded-pill  fw-semibold btn-register text-white  mt-2 w-100"
              >
                See Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </PhotoProvider>
  );
};

export default ServiceSummaryCard;
