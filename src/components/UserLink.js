import FollowButton from "components/FollowButton";
import React from "react";
import { Card, Figure, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserLink({ ...props }) {
  return (
    <OverlayTrigger placement="auto" delay="300" overlay={<UserPopover />}>
      <Link {...props} />
    </OverlayTrigger>
  );
}

const UserPopover = React.forwardRef(({ ...props }, ref) => {
  return (
    <Popover className="border-0" ref={ref} id="user-popover" {...props}>
      <Card className="border p-3 bg-transparent m-0">
        <Row className="d-flex justify-content-between align-items-center">
          <Figure
            style={{ height: "65px", width: "65px" }}
            className="rounded-circle overflow-hidden bg-primary mr-3"
          >
            <Figure.Image className="w-100 h-100" src="" />
          </Figure>
          <FollowButton />
        </Row>
        <div className="flex flex-column">
          <b>User Name</b>
          <div className="text-muted mb-2 mt-0">Screen Name</div>
        </div>
        <blockquote>Description</blockquote>
        <Row className="d-flex flex-column">
          <span className="text-muted">User Location</span>
          <span className="text-muted">Joined Created At</span>
        </Row>
        <Row className="d-flex mt-1 mb-2">
          <em className="mr-2">
            Followers Count
            <span className="text-muted">Followers</span>
          </em>
          <div className="mr-2">
            Friends Count <span className="text-muted">Following</span>
          </div>
        </Row>
      </Card>
    </Popover>
  );
});
