import React from "react";
import { ListGroup } from "react-bootstrap";

export default function UsersList(props) {
  const { className } = props;

  return (
    <ListGroup className={`border-bottom ${className}`} variant="flush">
      <div className="message font-weight-bold">No users to show</div>
    </ListGroup>
  );
}
