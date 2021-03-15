import React from "react";
import { Button } from "react-bootstrap";
import { useAuthUser } from "../context/auth-context";
import { followUser, unfollowUser } from "../utils/api-client";

export default function FollowButton({ user }) {
  const authUser = useAuthUser();
  const [hoverText, setHoverText] = React.useState('');
  const [hoverVariant, setHoverVariant] = React.useState('');

  const text = user.following ? 'Following' : 'Follow';
  const variant = user.following ? 'primary' : 'outline-primary';
  
  function handleMouseEnter() { 
    if (user.following) {
      setHoverVariant('danger');
      setHoverText('Unfollow');
    } else {
      setHoverVariant('primary');
    }
  }
  
  function handleMouseLeave() {
    setHoverText('');
    setHoverVariant('');
  }

  function handleUnfollowUser(event) {
    event.preventDefault();
    setHoverText('Unfollowed'); //Set this before the api call so it shows immediately, then user may disappear from the feed once query is refreshed 
    unfollowUser(user.screen_name);
  }

  function handleFollowUser(event) {
    event.preventDefault();
    setHoverText('Followed');
    followUser(user.screen_name);
  }

  const hideFollowButton = !user || authUser?.screen_name === user.screen_name; 
  if (hideFollowButton) return null;

  return (
      <Button
        onClick={user.following ? handleUnfollowUser : handleFollowUser} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant={hoverVariant || variant} 
        className="rounded-pill px-3 py-1 font-weight-bold"
      >
        <span>{hoverText || text}</span>
      </Button>
  );
}
