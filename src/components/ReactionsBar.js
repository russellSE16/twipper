import { faComment } from "@fortawesome/free-regular-svg-icons/faComment";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import { faComment as commentSolid } from "@fortawesome/free-solid-svg-icons/faComment";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faReply } from "@fortawesome/free-solid-svg-icons/faReply";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ReactionsBar() {
  return (
    <div className="d-flex align-items-center">
      <Dropdown drop="up" className="bg-clear high-index">
        <Dropdown.Toggle
          className="btn btn-naked-primary rounded-pill"
          id="comment-dropdown"
        >
          {"retweeted" ? (
            <FontAwesomeIcon icon={commentSolid} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faComment} />
          )}
          <small className="m-1">Retweet Count</small>
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight className="higher-index rounded-0">
          <Dropdown.Item className="high-index" as="button">
            {"Retweeted" ? "Undo Repost" : "Repost"}
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            className="high-index"
            to={`/compose/post?quote=post-id-str`}
          >
            Quote this post
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link
        to={`/compose/post?reply_to=post-id-str`}
        className="btn btn-naked-secondary rounded-pill high-index"
      >
        <FontAwesomeIcon
          style={{ fontSize: "1.2em" }}
          className="mb-1 text-muted"
          icon={faReply}
        />
      </Link>
      <button className="btn btn-naked-danger rounded-pill high-index">
        {"favorited" ? (
          <FontAwesomeIcon icon={heartSolid} className="text-danger" />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
        <small className="m-1">Favorite Count</small>
      </button>
    </div>
  );
}
