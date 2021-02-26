import React from "react";
import { Alert, Figure, Form, Modal, Row } from "react-bootstrap";

export default function ProfileModal() {
  // const [isLoading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // const [banner, setBanner] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [bio, setBio] = React.useState("");
  // const [location, setLocation] = React.useState("");
  // const [website, setWebsite] = React.useState("");
  // const [profile, setProfile] = React.useState("");

  return (
    <Modal
      enforceFocus={false}
      className="p-0"
      size="lg"
      scrollable
      show
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="py-2">
        <Modal.Title>
          <small className="font-weight-bold">
            {!"redirected" ? "Edit profile" : "Complete your profile"}
          </small>
        </Modal.Title>
      </Modal.Header>
      <Alert variant="danger" className="mb-0 font-weight-bold text-white">
        error
      </Alert>
      <Modal.Body className="pt-1 pb-0 px-0">
        <fieldset>
          <Form noValidate>
            <Figure
              className="d-flex"
              style={{
                height: "200px",
                width: "100%",
                backgroundImage: `url()`,
              }}
            >
              <Figure.Image src="" className="w-100 h-100" />
              <label
                htmlFor="cover-image"
                className="mx-auto my-auto btn btn-outline border px-2 py-1 font-weight-bold"
              >
                Edit cover image
              </label>
              <input
                style={{ display: "none" }}
                id="cover-image"
                type="file"
                accept="img/*"
              />
            </Figure>
            <div className="px-3">
              <Row className="d-flex justify-content-between mt-n2 px-2 align-items-center w-100">
                <label htmlFor="profile-image">
                  <Figure
                    style={{ height: "100px", width: "100px" }}
                    className="mt-n5 rounded-circle overflow-hidden bg-primary"
                  >
                    <Figure.Image className="w-100 h-100" src="" />
                  </Figure>
                  <input
                    style={{ display: "none" }}
                    id="profile-image"
                    type="file"
                    accept="img/*"
                  />
                </label>
              </Row>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control style={{ fontSize: "1.25rem" }} type="text" />
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ fontSize: "1.25rem", minHeight: "100px" }}
                />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control style={{ fontSize: "1.25rem" }} type="text" />
              </Form.Group>
              <Form.Group controlId="website">
                <Form.Label>Website</Form.Label>
                <Form.Control style={{ fontSize: "1.25rem" }} type="text" />
              </Form.Group>
            </div>
            <Modal.Footer className="py-1">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div />
                <div className="right">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-3 py-1 font-weight-bold"
                  >
                    Save
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </Form>
        </fieldset>
      </Modal.Body>
    </Modal>
  );
}
