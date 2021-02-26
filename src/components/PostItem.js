import MultiMedia from "components/MultiMedia";
import PostTag from "components/PostTag";
import PostText from "components/PostText";
import QuotedPost from "components/QuotedPost";
import ReactionsBar from "components/ReactionsBar";
import UserLink from "components/UserLink";
import React from "react";
import { Figure, ListGroup, Media, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostItem() {
  return (
    <ListGroup.Item className="px-3" action as="div">
      <Row className="d-flex px-3 pb-1 mt-n2 text-muted">
        <PostTag />
      </Row>
      <Link className="stretched-link" to={`/post/post-id-str`} />
      <Media className="mb-n2 w-100">
        <UserLink className="rounded-circle" to={`/user/user-screenname`}>
          <Figure
            className="bg-border-color rounded-circle mr-2 overflow-hidden"
            style={{ height: "50px", width: "50px" }}
          >
            <Figure.Image src="" className="w-100 h-100" />
          </Figure>
        </UserLink>
        <Media.Body className="w-50">
          <Row className="d-flex align-items-center">
            <UserLink
              to={`/user/user-screenname`}
              className="text-dark font-weight-bold mr-1"
            >
              Post User Name
            </UserLink>
            <span className="text-muted mr-1">@Post User Screen Name</span>
            <pre className="m-0 text-muted">{" - "}</pre>
            <span className="text-muted">Post Created At</span>
          </Row>
          <Row className="mb-n1 mt-1">
            <blockquote className="mb-1 mw-100">
              <PostText to={`/post/post-id-str`} />
            </blockquote>
          </Row>
          <Row>
            <MultiMedia className="mt-2" />
            <QuotedPost className="mt-2" />
          </Row>
          <Row className="d-flex justify-content-end align-items-center position-static">
            <ReactionsBar />
          </Row>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );
}
