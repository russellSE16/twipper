import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Trends() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item as={Link} action to={`/search?q=trend-query`}>
        <small className="text-muted">Trending Worldwide</small>
        <p className="mb-1 text-dark font-weight-bold text-capitalize">
          Trend Name
        </p>
        <em>Trend Volume Tweets</em>
      </ListGroup.Item>
    </ListGroup>
  );
}
