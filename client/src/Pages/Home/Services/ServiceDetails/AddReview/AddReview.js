import React, { useContext } from 'react';
import './AddReview.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const AddReview = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName } = service;

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

    const review = {
      serviceName: serviceName,
      serviceId: _id,
      userName,
      photoURL,
      userEmail,
      description,
    };

    console.log(review);

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success('Review added Successfully');
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        <div className="profile-page py-5">
          <div className="min-vh-100 container pb-5">
            <div>
              <div className="profile-page-form-container">
                <div>
                  <h4 className="py-4 text-center fs-2">
                    Add a New <span className="text-info">Review</span>
                  </h4>
                  <p className="text-center w-75 mx-auto">
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </p>
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
                      ADD REVIEW
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
