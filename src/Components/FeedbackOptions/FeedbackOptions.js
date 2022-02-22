import React from "react";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={s.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
