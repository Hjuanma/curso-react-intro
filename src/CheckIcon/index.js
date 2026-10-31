import React from "react";
import PropTypes from "prop-types";
import { TodoIcon } from "../TodoIcon";

function CheckIcon({ completed, onClick }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onClick}
    />
  );
}

CheckIcon.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export { CheckIcon };