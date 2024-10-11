import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './EditReview.css';

const EditReview = () => {
  const { user } = useContext(AuthContext);
  const storedReview = useLoaderData();
  const { _id, description, serviceName } = storedReview;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const description = form.description.value;
    const userName = user?.displayName;
    const photoURL = user?.photoURL;
    const userEmail = user?.email;

    if (description.length < 30) {
      return toast.info('Please type at least 30 characters');
    }

    const updatedReview = {
      serviceName: serviceName,
      serviceId: _id,
      userName,
      photoURL,
      userEmail,
      description,
    };

    fetch(`https://nurturing-minds-server-side.vercel.app/reviews/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Review Updated');
          form.reset();
          navigate('/my-review');
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="profile-page py-5">
        <div className="min-vh-100 container pb-5">
          <Link to="/my-review" className="mb-4 d-block">
            <Button variant="info" size="sm">
              Back
            </Button>
          </Link>
          <div>
            <div className="profile-page-form-container">
              <div>
                <h4 className="py-4 text-center fs-2">
                  Update Your <span className="text-info">Review</span>
                </h4>
                <h6 className="text-center w-75 mx-auto">
                  Service Name: {serviceName}
                </h6>
              </div>
              <Form
                onSubmit={handleSubmit}
                className=" d-flex flex-column justify-content-center p-4 "
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    defaultValue={description}
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder=" type what you want to say about this service..."
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center  mt-3">
                  <Button
                    className="fw-semibold btn-register px-5"
                    variant="primary"
                    type="submit"
                  >
                    SAVE CHANGES
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
