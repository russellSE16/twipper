import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FollowCard(props) {
  const { className } = props;

  return (
    <Card className={className}>
      <Card.Header>{props.title}</Card.Header>
      <div className="message">Login to see users and their posts</div>
      <Card.Footer>
        <Card.Link as={Link} to="/explore/users">
          Show more
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}
