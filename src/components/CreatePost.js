import { faImage } from "@fortawesome/free-regular-svg-icons/faImage";
import { faSmile } from "@fortawesome/free-regular-svg-icons/faSmile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CreatePost() {
  return (
    <div className="p-2 mt-2">
      <Media>
        <Link className="rounded-circle" to={`/user/auth-user-screenname`}>
          <img
            className="rounded-circle"
            src=""
            alt=""
            width={50}
            height={50}
          />
        </Link>
        <Media.Body>
          <textarea
            className="w-100 p-2"
            style={{ maxHeight: "80vh", height: "auto" }}
            name="text"
            placeholder="What's happening?"
          />
          <div className="border-top d-flex justify-content-between align-items-center pt-2">
            <div style={{ fontSize: "1.5em" }}>
              <Link
                className="text-primary btn btn-lg rounded-circle btn-naked-primary p-2"
                to="/compose/post"
              >
                <FontAwesomeIcon size="lg" icon={faSmile} />
              </Link>
              <button className="disabled text-primary btn btn-lg rounded-circle btn-naked-primary p-2">
                <FontAwesomeIcon size="lg" icon={faImage} />
              </button>
            </div>
            <div className="right">
              <button className="btn btn-primary rounded-pill px-3 py-2 font-weight-bold">
                Post
              </button>
            </div>
          </div>
        </Media.Body>
      </Media>
    </div>
  );
}
