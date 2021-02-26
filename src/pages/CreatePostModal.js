import { faImage } from "@fortawesome/free-regular-svg-icons/faImage";
import { faSmile } from "@fortawesome/free-regular-svg-icons/faSmile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuotedPost from "components/QuotedPost";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import React from "react";
import { Alert, Media, Modal, OverlayTrigger, Popover } from "react-bootstrap";

export default function CreatePostModal() {
  const picker = (
    <Popover id="popover-basic">
      <Picker
        color="#3eaaee"
        sheetSize={32}
        emoji="point_up"
        title="Pick your emoji"
        set="twitter"
      />
    </Popover>
  );

  return (
    <Modal
      className="p-0"
      size="lg"
      scrollable
      show
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="py-2">
        <Modal.Title>
          <small className="font-weight-bold">
            {"reply" ? "Post your reply" : "Compose post"}
          </small>
        </Modal.Title>
      </Modal.Header>
      <Alert variant="danger" className="font-weight-bold text-white">
        error
      </Alert>
      <Modal.Body className="pt-1 pb-0">
        <Media className="h-100 w-100">
          <img
            className="rounded-circle"
            src=""
            alt=""
            width={50}
            height={50}
          />
          <Media.Body className="h-100 w-50" style={{ minHeight: "175px" }}>
            <textarea
              className="w-100 p-2 pb-5"
              style={{ height: "auto" }}
              name="text"
              placeholder="What's happening?"
            ></textarea>
            <QuotedPost className="mb-2 mt-n5" />
          </Media.Body>
        </Media>
      </Modal.Body>
      <Modal.Footer className="py-1">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div style={{ fontSize: "1.5em" }}>
            <OverlayTrigger
              rootClose
              trigger="click"
              placement="auto-start"
              overlay={picker}
            >
              <button className="text-primary btn btn-lg rounded-circle btn-naked-primary p-2">
                <FontAwesomeIcon size="lg" icon={faSmile} />
              </button>
            </OverlayTrigger>
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
      </Modal.Footer>
    </Modal>
  );
}
