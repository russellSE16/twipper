import React from "react";
import { Col, Figure, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Col style={{ maxWidth: "400px" }} className="mx-auto border px-3 pb-3">
      <Figure className="d-flex flex-column align-items-center">
        <Figure.Image
          width={200}
          height={200}
          style={{ padding: "2em" }}
          src="/img/twitter-splash.png"
          alt="Twitter Logo"
        />
      </Figure>
      <h5 className="font-weight-bolder">See what’s happening now.</h5>
      <fieldset>
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" autoCapitalize="off" />
          </Form.Group>
          <Form.Group className="mb-0" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control autoCorrect="off" type="password" name="password" />
          </Form.Group>
          <p>
            <small>
              <Link to="/help">Forgot password?</Link>
            </small>
            <br />
            <small className="text-danger">error</small>
          </p>
          <div className="d-flex flex-column align-items-center">
            <button
              type="submit"
              className="btn btn-outline-primary btn-block rounded-pill font-weight-bold"
            >
              Log in
            </button>
            <small className="text-muted m-2">or</small>
            <Link
              to="/signup"
              className="btn btn-primary btn-block rounded-pill font-weight-bold"
            >
              Sign up
            </Link>
          </div>
        </Form>
      </fieldset>
    </Col>
  );
}
