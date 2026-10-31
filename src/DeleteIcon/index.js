import React from "react";
import PropTypes from "prop-types";
import { TodoIcon } from '../TodoIcon';

function DeleteIcon({ onClick }) {
  return <TodoIcon type="delete" color="gray" onClick={onClick} />;
}

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { DeleteIcon };