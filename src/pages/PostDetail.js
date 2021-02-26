import Heading from "components/Heading";
import MultiMedia from "components/MultiMedia";
import PostsList from "components/PostsList";
import PostTag from "components/PostTag";
import PostText from "components/PostText";
import QuotedPost from "components/QuotedPost";
import ReactionsBar from "components/ReactionsBar";
import UserLink from "components/UserLink";
import React from "react";
import { Col, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <Heading backButton title="Post" />
      <Col className="p-3 d-flex flex-column">
        <Row className="d-flex px-3 pb-1 mt-n2 text-muted">
          <PostTag />
        </Row>
        <Row>
          <Row>
            <UserLink
              className="rounded-circle"
              to={`/user/post-user-screenname`}
            >
              <Figure
                className="bg-border-color rounded-circle mr-2 overflow-hidden"
                style={{ height: "50px", width: "50px" }}
              >
                <Figure.Image src="" className="w-100 h-100" />
              </Figure>
            </UserLink>
            <Col className="d-flex flex-column">
              <UserLink
                to={`/user/post-user-screenname`}
                className="text-dark font-weight-bold mr-1"
              >
                Post User Name
              </UserLink>
              <span className="text-muted mr-1">@Post User Screen Name</span>
            </Col>
          </Row>
          <Row></Row>
        </Row>
        <Row>
          <blockquote style={{ fontSize: "1.5em" }} className="my-2 mw-100">
            <PostText expanded />
          </blockquote>
        </Row>
        <Row className="mb-2">
          <MultiMedia expanded />
          <QuotedPost className="mt-2" />
        </Row>
        <Row>
          <span className="text-muted pb-2">
            Post Created At (Time)
            {" - "}
            Post Created At (Date)
          </span>
        </Row>
        <Row className="border-top border-bottom d-flex p-2">
          <div className="py-1 pr-3">
            <span className="font-weight-bold mr-1">Post Favorite Count</span>
            <Link to={`/post/post-id-str/likes`} className="text-muted">
              Likes
            </Link>
          </div>
          <div className="py-1 pr-3">
            <span className="font-weight-bold mr-1">Post Retweet Count</span>
            <Link to={`/post/post-id-str/reposts`} className="text-muted">
              Reposts
            </Link>
          </div>
        </Row>
        <Row className="d-flex justify-content-end align-items-center mt-2 border-bottom">
          <ReactionsBar />
        </Row>
        <PostsList />
      </Col>
    </>
  );
}
