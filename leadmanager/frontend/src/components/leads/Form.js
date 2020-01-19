import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addLeads } from '../../actions/leads';

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLeads: PropTypes.func.isRequired
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();    
    
    const { name, email, message } = this.state;

    this.props.addLeads({ name, email, message });

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Lead</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="label">Name</label>
            <input 
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control"
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLeads }
)(Form);
