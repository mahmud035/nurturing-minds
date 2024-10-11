import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSetTitle from '../../hooks/useSetTitle';

const AddService = () => {
  const navigate = useNavigate();
  useSetTitle('Add Service');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const imageURL = form.photoURL.value;
    const description = form.description.value;

    const service = { serviceName, price, imageURL, description };

    fetch('https://nurturing-minds-server-side.vercel.app/service', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Service Added Successfully');
          navigate('/services');
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
          <div>
            <div className="profile-page-form-container">
              <div>
                <h4 className="py-4 text-center fs-2">
                  Add a <span style={{ color: 'aqua' }}>New Service</span>
                </h4>
                <p className="text-center w-75 mx-auto">
                  Add a new service that you think you need that particular
                  service.
                </p>
              </div>
              <Form
                onSubmit={handleSubmit}
                className=" d-flex flex-column justify-content-center p-4 "
              >
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label className="fw-semibold">Service Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="serviceName"
                    placeholder="service name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label className="fw-semibold">Price</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    placeholder="price"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-semibold">Photo URL </Form.Label>
                  <Form.Control
                    type="text"
                    name="photoURL"
                    placeholder="Photo URL"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder=" description"
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center  mt-3">
                  <Button
                    className="fw-semibold btn-register px-5"
                    variant="primary"
                    type="submit"
                  >
                    ADD SERVICE
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

export default AddService;
