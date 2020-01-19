import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { alert, message, error } = this.props;

    if(prevProps.message !== message) {
      if(message) {
        alert.success(message.msg);
      }
    }
    
    if(prevProps.error !== error) {
      Object.entries(error.msg).forEach(([key, value]) => {
        alert.show(`${key}: ${value}`);
      });
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(
  mapStateToProps,
  null
)(withAlert()(Alerts));