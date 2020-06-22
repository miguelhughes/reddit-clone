import React from "react";
import PropTypes from "prop-types";

export const Header = ({ subreddit }) => {
  return (
    <div className="header">
      <div className="content">
        <div className="title">
          /r/{subreddit} - The Front Page Of{" "}
          <span className="capitalize">{subreddit}</span>
          <div className="subtitle">{subreddit}</div>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  subreddit: PropTypes.string.isRequired,
};
