import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';
import useSetTitle from '../../hooks/useSetTitle';
import Table from 'react-bootstrap/Table';

const Blog = () => {
  useSetTitle('Blog');
  return (
    <div className="accordion-container">
      <h1>Questions & Answer</h1>
      <Accordion className="w-50 mx-auto accordion-content">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>

          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>
                <tr>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td>They have dynamic schema</td>
                </tr>
                <tr>
                  <td>
                    These databases are not suited for hierarchical data
                    storage.
                  </td>
                  <td>
                    These databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <td>These databases are best suited for complex queries</td>
                  <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <td>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                  </td>
                  <td>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
            <h5 className="py-3">How do JSON Web Tokens work?</h5>
            In authentication, when the user successfully logs in using their
            credentials, a JSON Web Token will be returned. Since tokens are
            credentials, great care must be taken to prevent security issues. In
            general, you should not keep tokens longer than required. <br />
            <br />
            You also should not store sensitive session data in browser storage
            due to lack of security. <br /> <br />
            Whenever the user wants to access a protected route or resource, the
            user agent should send the JWT, typically in the Authorization
            header using the Bearer schema. The content of the header should
            look like the following: <br /> <br />
            <strong>Authorization: Bearer token</strong> <br /> <br />
            This can be, in certain cases, a stateless authorization mechanism.
            The server's protected routes will check for a valid JWT in the
            Authorization header, and if it's present, the user will be allowed
            to access protected resources. If the JWT contains the necessary
            data, the need to query the database for certain operations may be
            reduced, though this may not always be the case. <br /> <br />
            Note that if you send JWT tokens through HTTP headers, you should
            try to prevent them from getting too big. Some servers don't accept
            more than 8 KB in headers. If you are trying to embed too much
            information in a JWT token, like by including all the user's
            permissions, you may need an alternative solution, like Auth0
            Fine-Grained Authorization. If the token is sent in the
            Authorization header, Cross-Origin Resource Sharing (CORS) won't be
            an issue as it doesn't use cookies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Javascript</th>
                  <th> NodeJS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Javascript is a programming language that is used for
                    writing scripts on the website.{' '}
                  </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>
                <tr>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <td>It is basically used on the client-side.</td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <td>
                    Javascript is capable enough to add HTML and play with the
                    DOM.
                  </td>
                  <td>Nodejs does not have capability to add HTML tags.</td>
                </tr>
                <tr>
                  <td>
                    Javascript can run in any browser engine as like JS core in
                    safari and Spidermonkey in Firefox.
                  </td>
                  <td>
                    V8 is the Javascript engine inside of node.js that parses
                    and runs Javascript.
                  </td>
                </tr>
                <tr>
                  <td>
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                  </td>
                  <td>
                    Some of the Nodejs modules are Lodash, express etc. These
                    modules are to be imported from npm.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module. <br /> <br />A single instance of
            Node.js runs in a single thread. If you have a multi-core system
            then you can utilize every core. Sometimes developer wants to launch
            a cluster of NodeJS process to take advantage of the multi-core
            system. The cluster module allows easy creation of child processes
            that all share the same server ports.
            <br /> <br />
            Using worker_threads Module: The best solution for CPU performance
            is Worker Thread. This module is used in Node.js because it is
            useful for performing heavy JavaScript tasks.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
