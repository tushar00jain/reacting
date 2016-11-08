import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const Message = ({message, type}) => {
  return (
    <div>{message}</div>
  );
};

function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps)(Message);
