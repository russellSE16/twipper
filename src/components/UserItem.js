import FollowButton from "components/FollowButton";
import UserLink from "components/UserLink";
import React from "react";
import { Col, ListGroup, Media, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserItem({ noPop, compact }) {
  return (
    <ListGroup.Item
      className="px-1 text-truncate"
      action
      as={noPop ? Link : UserLink}
      to={`/user/screen-name`}
    >
      <Media>
        <img
          width={50}
          height={50}
          className="rounded-circle mx-1"
          src=""
          alt=""
        />
        <Media.Body>
          <Row>
            <Col className="pr-5 pr-lg-4 pr-xl-2" xs="8">
              <p className="text-dark mb-0 text-truncate text-capitalize font-weight-bold">
                User name
              </p>
              <p className="text-muted text-truncate mt-n1"> @Screen Name</p>
            </Col>
            <Col
              className="d-flex align-items-center justify-content-end px-1"
              xs="4"
            >
              <FollowButton />
            </Col>
          </Row>
          <Row>
            {!compact && (
              <blockquote className="mb-0 mt-n2">Description</blockquote>
            )}
          </Row>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );
}
