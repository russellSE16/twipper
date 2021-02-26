import Heading from "components/Heading";
import UsersList from "components/UsersList";
import React from "react";

export default function PostLikes() {
  return (
    <>
      <Heading title="Liked by" backButton btnProfile />
      <UsersList noPop />
    </>
  );
}
