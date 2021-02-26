import PostsList from "components/PostsList";
import React from "react";
import FollowCard from "./FollowCard";

export default function Feed() {
  return (
    <>
      <PostsList />
      <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      />
    </>
  );
}
