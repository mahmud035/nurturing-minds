import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import notFound from '../../assets/images/notFound.png';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      {error && (
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center min-vh-100">
          <Image
            roundedCircle
            src={notFound}
            style={{ width: '350px', height: '350px' }}
          ></Image>
          <Link to="/">
            <Button variant="warning">Back to Home</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
