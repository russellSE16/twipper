import PostText from "components/PostText";
import QuotePost from "components/QuotedPost";
import React from "react";
import { Figure, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotificationItem() {
  const active = "notification.read"
    ? ""
    : "bg-bg-color border-left-right-primary-custom";
  let body;
  let heading;
  let anchor = "/notifications";
  let tag;

  switch ("notification.type") {
    case "mentioned":
      anchor = `/post/post-id-str`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@Post User Screen Name</b> mentioned you in post
          </p>
          <blockquote className="bg-light mt-n2 p-2 border-left-right-secondary-custom">
            <PostText />
          </blockquote>
        </div>
      );
      break;
    case "replied":
      anchor = `/post/post-id-str`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@Post User Screen Name</b> replied
          </p>
          <QuotePost />
        </div>
      );
      break;
    case "liked":
      anchor = `/post/post-id-str/likes`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@User Screen Name</b> liked
          </p>
          <QuotePost />
        </div>
      );
      break;
    case "followed":
      anchor = `/user/authUser-screenname/followers`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@User Screen Name</b> started following you
          </p>
        </div>
      );
      break;
    case "unfollowed":
      anchor = `/user/user-screenname`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@User Screen Name</b> no longer follows you
          </p>
        </div>
      );
      break;
    case "reposted":
      anchor = `/post/post-id-str/reposts`;
      body = (
        <div className="d-flex flex-column">
          <p>
            <b>@User Screen Name</b> reposted
          </p>
          <QuotePost />
        </div>
      );
      break;
    default:
      break;
  }

  if ("user") {
    heading = (
      <div className="d-flex">
        <Link to={`/user/user-screenname`}>
          <Figure
            className="bg-border-color rounded-circle overflow-hidden mr-1 mb-2"
            style={{ height: "45px", width: "45px" }}
          >
            <Figure.Image src="" className="w-100 h-100" />
          </Figure>
        </Link>
      </div>
    );
  }

  return (
    <ListGroup.Item
      className={`${active} px-lg-5 px-xs-2 px-sm-4`}
      action
      as="div"
    >
      <Link className="stretched-link" to={anchor} />
      <div className="mt-n2 mb-2">
        <small>{tag}</small>
      </div>
      {heading}
      {body}
    </ListGroup.Item>
  );
}
