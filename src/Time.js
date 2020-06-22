import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Time = ({ time }) => {
  let timeString;
  if (typeof time === "string" && time.indexOf("ago") !== -1) {
    timeString = time;
  }
  //we can asume that the text is already time relative to current time
  else timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};
Time.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Time;
