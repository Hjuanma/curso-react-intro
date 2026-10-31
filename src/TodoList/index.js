import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css'

function TodoList(props){
  return(
    <ul className="TodoList">
        {props.children}
    </ul>
  );
}

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export {TodoList};
