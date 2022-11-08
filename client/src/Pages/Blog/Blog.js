import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';
import useSetTitle from '../../hooks/useSetTitle';

const Blog = () => {
  useSetTitle('Blog');
  return (
    <div className="accordion-container">
      <h1>Questions & Answer</h1>
      <Accordion className="w-50 mx-auto accordion-content" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>

          <Accordion.Body>
            <strong>Cross-Origin Resource Sharing (CORS) </strong> is an
            HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a
            browser should permit loading resources. CORS also relies on a
            mechanism by which browsers make a "preflight" request to the server
            hosting the cross-origin resource, in order to check that the server
            will permit the actual request. In that preflight, the browser sends
            headers that indicate the HTTP method and headers that will be used
            in the actual request.
            <br /> <br />
            An example of a cross-origin request: the front-end JavaScript code
            served from https://domain-a.com uses XMLHttpRequest to make a
            request for https://domain-b.com/data.json. <br /> <br />
            For security reasons, browsers restrict cross-origin HTTP requests
            initiated from scripts. For example, XMLHttpRequest and the Fetch
            API follow the same-origin policy. This means that a web application
            using those APIs can only request resources from the same origin the
            application was loaded from unless the response from other origins
            includes the right CORS headers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            Firebase helps us to develop high-quality apps, grow our user base,
            and earn more money. Each feature works independently, and they work
            even better together. <br /> <br />
            <h5>What other options do you have to implement authentication?</h5>
            Auth0, MongoDB, Passport, Okta are the most popular alternatives and
            competitors to Firebase Authentication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            When developing a React Application with Authentication, we might
            require public and private routes. <br />
            <br />
            <h4>Public Routes</h4>
            Public routes are Log in, SignUp, Forgot Password, Reset Password.
            In simple words, These routes can be accessed before login into the
            <br /> <br />
            <h4>Private Routes</h4>
            Private Routes vary based on the Apps, For example, Dashboard, User
            Profile, App Settings, Home etc. In simple words, These routes can
            be accessed only after login. The constraints for Public and Private
            routes are that Public routes should not be accessed after login and
            Private routes should not be accessible before login. <br /> <br />
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in). Public and Private routes will also restrict accessing
            the previously visited routes using the browser back button after
            logout.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
            <br />
            <br />
            <strong>Working of Node.js:</strong>
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
            <br /> <br />
            <strong>Node.js basically works on two concept</strong>
            <li>Asynchronous</li>
            <li>Non-blocking I/O</li>
            <strong>Non-blocking I/o:</strong> Non-blocking i/o means working
            with multiple requests without blocking the thread for a single
            request. I/O basically interacts with external systems such as
            files, databases. Node.js is not used for CPU-intensive work means
            for calculations, video processing because a single thread cannot
            handle the CPU works.
            <br /> <br />
            <strong> Asynchronous: </strong> Asynchronous is executing a
            callback function. The moment we get the response from the other
            server or database it will execute a callback function. Callback
            functions are called as soon as some work is finished and this is
            because the node.js uses an event-driven architecture. The single
            thread doesn't work with the request instead it sends the request to
            another system which resolves the request and it is accessible for
            another request.
            <figure>
              <img
                className="mt-4 img-fluid"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png"
                alt=""
              />
              <figcaption>Fig: Working of Node.js.</figcaption>
            </figure>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
