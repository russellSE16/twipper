import PostsList from "components/PostsList";
import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../utils/api-client";
import FollowCard from "./FollowCard";

export default function Feed() {
  const { data, isLoading, isSuccess } = useQuery('Posts', getPosts);

  return (
    <>
      <PostsList posts={data} isLoading={isLoading} isSuccess={isSuccess} />
      <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      />
    </>
  );
}
