import Heading from "components/Heading";
import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Notifications() {
  return (
    <>
      <Heading title="Notifications" btnProfile backButton />
      <ListGroup variant="flush">
        <div className="message font-weight-bold">No notifications yet</div>
      </ListGroup>
    </>
  );
}
