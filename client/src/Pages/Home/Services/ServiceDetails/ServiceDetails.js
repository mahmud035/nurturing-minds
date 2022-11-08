import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const service = useLoaderData() || {};
  console.log(service);

  return (
    <div>
      <p>Service Details</p>
    </div>
  );
};

export default ServiceDetails;
