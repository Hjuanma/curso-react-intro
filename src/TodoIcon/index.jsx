import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CheckSVG } from "../CheckIcon/check.svg";
import { ReactComponent as DeleteSVG } from "../DeleteIcon/delete.svg";

import './TodoIcon.css';

const iconType = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg " fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconType[type](color)}
    </span>
  );
}

TodoIcon.propTypes = {
  type: PropTypes.oneOf(['check', 'delete']).isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export {TodoIcon}