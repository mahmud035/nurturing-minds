import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import './AllService.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceSummaryCard from '../ServiceSummaryCard/ServiceSummaryCard';
import useSetTitle from '../../../../hooks/useSetTitle';
import { CirclesWithBar } from 'react-loader-spinner';

const AllService = () => {
  const services = useLoaderData() || [];
  useSetTitle('Services');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (services.length === 0) {
    return (
      <CirclesWithBar
        height="60"
        width="60"
        color="#38D4C6"
        wrapperStyle={{}}
        wrapperClass="d-flex justify-content-center align-items-center  vh-100"
        visible={true}
        ariaLabel="circles-with-bar-loading"
      />
    );
  }

  // console.log(services);
  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="text-center">
            <h2>My Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus
              mattis, pulvinar leo Fusce quis urna metus. Donec et lacus et sem
              lacinia cursus.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="service-card-container">
            {services.map((service, index) => (
              <ServiceSummaryCard
                key={index}
                service={service}
              ></ServiceSummaryCard>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllService;
