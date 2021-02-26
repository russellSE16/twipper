import Heading from "components/Heading";
import UserList from "components/UsersList";
import React from "react";

export default function UserFriends() {
  return (
    <>
      <Heading title="Following" backButton btnProfile />
      <UserList noPop />
    </>
  );
}
