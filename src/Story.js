import React from "react";
import PropTypes from "prop-types";
import Time from "./Time";
import "./Story.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

export const Story = ({ story, onUpVote, onDownVote }) => {
  return (
    <div className="story">
      <div className="controls">
        <button onClick={onUpVote}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <span>{story.ups}</span>
        <button onClick={onDownVote}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <Thumbnail url={story.thumbnail} />
      <div className="content">
        <div className="title">
          <a href={story.url}>{story.title}</a>
          <Domain domain={story.domain} />
        </div>
        <div>
          submitted <Time time={story.created * 1000} /> ago by {story.author}
        </div>
        <div className="actions">
          <Comment comments={story.num_comments} />
          <span>share</span>
          <span>save</span>
          <span>hide</span>
          <span>report</span>
          <span>pocket</span>
        </div>
      </div>
    </div>
  );
};
Story.propTypes = {
  story: PropTypes.shape({
    ups: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    num_comments: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
  }),
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
};
const Comment = ({ comments }) => {
  return (
    <span className="commentAction">
      {comments > 0 ? comments + " comments" : "comment"}
    </span>
  );
};
Comment.propTypes = {
  comments: PropTypes.number.isRequired,
};
const Thumbnail = ({ url }) => {
  let child;
  if (url === "self") child = <FontAwesomeIcon icon={faGlobeAmericas} />;
  else child = <img src={url} alt="post thumbnail" />;

  return <div className="thumbnail">{child}</div>;
};
Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};

const Domain = ({ domain }) => {
  if (!domain.startsWith("self."))
    return <span className="domain">[{domain}]</span>;
  else return null;
};

export default Domain;
