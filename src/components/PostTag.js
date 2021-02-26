import UserLink from "components/UserLink";
import React from "react";
import { Link } from "react-router-dom";

export default function PostTag() {
  return (
    <>
      {"isRetweet" && (
        <UserLink className="text-muted" to={`/user/screenname`}>
          <small>@Screen Name retweeted</small>
        </UserLink>
      )}
      {"isReply" && (
        <Link className="text-muted" to={`/post/post-id`}>
          <small>Reply Text</small>
        </Link>
      )}
    </>
  );
}
