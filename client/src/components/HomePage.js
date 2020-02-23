import React from "react";
import { Link } from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";

const HomePage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h4>New Here</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up
        </Link>
      </div>
    );
  }
  return (
    <div>
      Logged In
      {/* <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      /> */}
    </div>
  );
};

export default HomePage;
