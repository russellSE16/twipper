import Heading from "components/Heading";
import PostsList from "components/PostsList";
import UsersList from "components/UsersList";
import React from "react";

export default function SearchResults() {
  return (
    <>
      <Heading title="Search" backButton btnProfile />
      {"hasUsers" && <UsersList />}
      {"hasPosts" ? (
        <PostsList />
      ) : (
        <div className="message">No posts found</div>
      )}
    </>
  );
}
