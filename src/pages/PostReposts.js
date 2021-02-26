import Heading from "components/Heading";
import UsersList from "components/UsersList";
import React from "react";

export default function PostReposts() {
  return (
    <>
      <Heading title="Reposted by" backButton btnProfile />
      <UsersList noPop />
    </>
  );
}
