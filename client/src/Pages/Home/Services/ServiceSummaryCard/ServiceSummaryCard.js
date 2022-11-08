import React from 'react';
import './ServiceSummaryCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ServiceSummaryCard = ({ service }) => {
  const { _id, serviceName, price, imageURL, description } = service;
  return (
    <div>
      <Card className="service-summary-card h-100">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{`${description.slice(0, 95)}...`}</Card.Text>
          <h3>
            Price: <span>{price}</span>
          </h3>
          <Link to={`/services/${_id}`}>
            <Button variant="primary">See Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceSummaryCard;
