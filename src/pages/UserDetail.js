import { faCalendarAlt as faDate } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faLocationArrow as faLocation } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FollowButton from "components/FollowButton";
import Heading from "components/Heading";
import PostsList from "components/PostsList";
import WithUrls from "components/WithUrls";
import React from "react";
import { Col, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserDetail() {
  return (
    <>
      <Heading title="" backButton />
      <Figure
        style={{
          height: "200px",
          width: "100%",
          backgroundImage: `url(banner)`,
        }}
      />
      <div className="p-3 border-bottom">
        <Row className="d-flex justify-content-between mt-n2 px-2 align-items-center w-100">
          <Figure
            style={{ height: "100px", width: "100px" }}
            className="mt-n5 rounded-circle overflow-hidden bg-primary"
          >
            <Figure.Image className="w-100 h-100" src="" />
          </Figure>
          {"isAuthUser" ? (
            <Link
              className="btn btn-outline-primary px-3 rounded-pill font-weight-bold"
              to="/settings/profile"
            >
              Edit profile
            </Link>
          ) : (
            <FollowButton />
          )}
        </Row>
        <div className="flex flex-column">
          <h5 className="mb-0">
            <b>User Name</b>
          </h5>
          <div className="text-muted">@User Screen Name</div>
        </div>
        <blockquote
          style={{ maxHeight: "300px" }}
          className="my-1 overflow-y-auto"
        >
          <WithUrls>User Description</WithUrls>
        </blockquote>
        <Row className="d-flex justify-content-between mt-2">
          <Col sm="6" lg="4" className="px-2 mb-1">
            <div className="d-flex text-muted align-items-top">
              <FontAwesomeIcon
                className="mt-1"
                icon={faLocation}
                style={{ fontSize: "1em" }}
              />
              <span className="ml-1">User Location</span>
            </div>
          </Col>
          <Col sm="6" lg="4" className="px-2 mb-1">
            <div className="d-flex text-muted align-items-top">
              <FontAwesomeIcon
                className="mt-1"
                icon={faDate}
                style={{ fontSize: "1em" }}
              />
              <span className="ml-1">Joined User Created At</span>
            </div>
          </Col>
          <Col sm="6" lg="4" className="px-2 mb-1">
            <div className="d-flex text-muted align-items-top">
              <FontAwesomeIcon
                className="mt-1 mr-1"
                icon={faLink}
                style={{ fontSize: "1em" }}
              />
              <WithUrls>Url</WithUrls>
            </div>
          </Col>
        </Row>
        <Row className="d-flex my-2">
          <Link
            to={`/user/user-screenname/followers`}
            className="text-muted mr-2"
          >
            User Followers Count <span>Followers</span>
          </Link>
          <Link
            to={`/user/user-screenname/friends`}
            className="text-muted mr-2"
          >
            User Friends Count <span>Following</span>
          </Link>
        </Row>
      </div>
      <h5 className="m-2 pb-2 border-bottom">
        User Statuses Count <span className="text-muted">Posts</span>
      </h5>
      <PostsList />
    </>
  );
}
