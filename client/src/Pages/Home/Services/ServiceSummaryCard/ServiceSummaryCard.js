import React from 'react';
import './ServiceSummaryCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceSummaryCard = ({ service }) => {
  const { serviceName, price, imageURL, description } = service;
  return (
    <div>
      <Card className="service-summary-card h-100">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{serviceName}</Card.Title>
          <Card.Text>{description.slice(0, 100)}</Card.Text>
          <h3>
            Price: <span>{price}</span>
          </h3>
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceSummaryCard;
