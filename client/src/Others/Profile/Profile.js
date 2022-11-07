import React, { useContext, useState } from 'react';
import './Profile.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);

  // const emailRef = useRef(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, photoURL);
    // console.log(emailRef.current.value);

    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {
        toast.success('Profile updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  return (
    <div className="profile-page">
      <div className="min-vh-100 container pb-5">
        <div className="d-flex justify-content-center gap-5  py-5">
          <Image
            rounded
            src={user?.photoURL}
            style={{ width: '200px', height: '200px' }}
          ></Image>
          <div>
            <h3>
              <FaUser size={16} className="me-1" /> {user?.displayName}
            </h3>
            <p>
              <MdEmail size={16} className="me-2" /> {email}
            </p>
          </div>
        </div>

        <div>
          <div className="profile-page-form-container">
            <h4 className="py-4 text-center">Edit Profile</h4>
            <Form
              onSubmit={handleSubmit}
              className=" d-flex flex-column justify-content-center p-4 "
            >
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <Form.Control
                  onChange={handleNameChange}
                  defaultValue={name}
                  type="text"
                  placeholder="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Email Address</Form.Label>
                <Form.Control
                  readOnly
                  onChange={handleEmailChange}
                  defaultValue={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Photo URL</Form.Label>
                <Form.Control
                  onChange={handlePhotoURLChange}
                  defaultValue={photoURL}
                  type="text"
                  placeholder="photo URL"
                />
              </Form.Group>

              <div className="d-flex justify-content-end gap-5 mt-3">
                <Link to="/">
                  <Button
                    className="fw-semibold btn-sign-in"
                    variant="success"
                    type="submit"
                  >
                    Back to Home
                  </Button>
                </Link>
                <Button
                  className="fw-semibold btn-register"
                  variant="primary"
                  type="submit"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
