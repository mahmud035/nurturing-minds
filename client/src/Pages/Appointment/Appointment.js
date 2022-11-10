import React, { useContext, useState } from 'react';
import './Appointment.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const Appointment = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const navigate = useNavigate();
  useSetTitle('Appointment');

  // st emailRef = useRef(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.info('Please login your account');
      return navigate('/login');
    }

    toast.success('Successfully Book Your Appointment');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="profile-page py-5">
      <div className="min-vh-100 container pb-5">
        <div>
          <div className="profile-page-form-container">
            <div>
              <h4 className="py-4 text-center fs-2">Make an Appointment</h4>
              <p className="text-center w-75 mx-auto">
                Your intake appointment can take one to two hours. You'll fill
                out paperwork and assessments to help determine a diagnosis.
                After that, you'll have a conversation with the psychiatrist.
              </p>
            </div>
            <Form
              onSubmit={handleSubmit}
              className=" d-flex flex-column justify-content-center p-4 "
            >
              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control
                  onChange={handleNameChange}
                  defaultValue={name}
                  type="text"
                  placeholder="name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email Address</Form.Label>
                <Form.Control
                  onChange={handleEmailChange}
                  defaultValue={email}
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">
                  Subject to Discuss
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject you want to discuss "
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder=" message" />
              </Form.Group>

              <div className="d-flex justify-content-center  mt-3">
                <Button
                  className="fw-semibold btn-register px-5"
                  variant="primary"
                  type="submit"
                >
                  SEND
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
