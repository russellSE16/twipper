import React from "react";
import { ListGroup } from "react-bootstrap";

export default function PostsList() {
  return (
    <ListGroup variant="flush" className="border-bottom">
      <div className="message">No posts for you right now</div>
    </ListGroup>
  );
}
