import PostsList from "components/PostsList";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { getPosts } from "../utils/api-client";
import FollowCard from "./FollowCard";
import Spinner from "./Spinner";

export default function Feed() {
  const [page, setPage] = React.useState(2); //Initialise with page 2 of the timeline feed for the first call from infinite scroll
  const [hasFinished, setHasFinished] = React.useState(false);

  const { data: posts, isLoading, isSuccess, isFetchingNextPage, fetchNextPage } = useInfiniteQuery('Posts', getPosts);

  React.useEffect(() => {
    const hasFinished = posts?.pages.some(p => p.length < 20);
    setHasFinished(hasFinished);
  }, [posts]);
  
  useBottomScrollListener(() => {
    if (hasFinished) return;
    fetchNextPage({ pageParam: page });
    setPage(page + 1)
  }, 200)

  return (
    <>
      <PostsList 
        posts={posts?.pages.flatMap(page => page)} 
        isLoading={isLoading} 
        isSuccess={isSuccess} 
      />
      {isFetchingNextPage && <Spinner />}
      {hasFinished && <>
        <div className="message text-info">You have reached the end!</div>
        <FollowCard
          noPop
          length={7}
          title="Follow more users to see their posts"
        />
      </>}
    </>
  );
}
