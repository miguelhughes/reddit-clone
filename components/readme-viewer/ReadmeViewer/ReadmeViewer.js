import React, { useState } from "react";
import PropTypes from "prop-types";
import RawFileLoader from "../RawFileLoader/RawFileLoader";
import "./ReadmeViewer.css";

const ReadmeViewer = ({ repoName }) => {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const url = `https://raw.githubusercontent.com/miguelhughes/${repoName}/master/README.md`;

  function toggleExpand() {
    setExpanded((wasExpanded) => !wasExpanded);
  }

  function dismiss() {
    setDismissed(true);
  }
  const theClass = "readme-viewer" + (expanded ? " expanded" : "");
  if (dismissed) return null;
  else
    return (
      <div className={theClass}>
        <div className="wrapper">
          <button onClick={toggleExpand} title="show this sample's readme">
            about this
          </button>
          <button className="linkButton" onClick={dismiss}>
            X
          </button>
          <RawFileLoader url={url} />
        </div>
        {/* {expanded && <RawFileLoader url={url} />} */}
      </div>
    );
};

ReadmeViewer.propTypes = { repoName: PropTypes.string.isRequired };
export default ReadmeViewer;
