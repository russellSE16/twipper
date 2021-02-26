import Heading from "components/Heading";
import UserList from "components/UsersList";
import React from "react";

export default function UserFollowers() {
  return (
    <>
      <Heading title="Followers" backButton btnProfile />
      <UserList noPop />
    </>
  );
}
