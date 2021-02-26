import MultiMedia from "components/MultiMedia";
import PostText from "components/PostText";
import UserLink from "components/UserLink";
import React from "react";
import { Card, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function QuotedPost({ className, expanded = false }) {
  return (
    <Card className={`${className} w-100 border bg-white overflow-hidden`}>
      <Link className="stretched-link" to={`/post/post-id-str`} />
      <div className="p-2">
        <Row className="d-flex align-items-center">
          <UserLink
            className="rounded-circle d-block"
            to={`/user/post-user-screenname`}
          >
            <Figure
              className="bg-border-color rounded-circle overflow-hidden mr-1 mb-0"
              style={{ height: "25px", width: "25px" }}
            >
              <Figure.Image src="" className="w-100 h-100" />
            </Figure>
          </UserLink>
          <UserLink
            to={`/user/post-user-screenname`}
            className="text-dark font-weight-bold mr-1"
          >
            Post User Name
          </UserLink>
          <span className="text-muted">@Post User Screen Name</span>
          <pre className="m-0 text-muted">{" - "}</pre>
          <span className="text-muted">Post Created At</span>
        </Row>
        <Row>
          <blockquote className="mb-1">
            <PostText to={`/post/post-id-str`} expanded={expanded} />
          </blockquote>
        </Row>
      </div>
      <Row>
        <MultiMedia className="rounded-0" />
      </Row>
    </Card>
  );
}
