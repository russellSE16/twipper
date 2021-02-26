import React from "react";
import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonProfile() {
  return (
    <Link className="d-flex align-items-end" to={`/user/authuser-screenname`}>
      <Figure
        className="bg-border-color rounded-circle overflow-hidden my-auto ml-2"
        style={{ height: "35px", width: "35px" }}
      >
        <Figure.Image src="" className="w-100 h-100" />
      </Figure>
    </Link>
  );
}
