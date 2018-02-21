import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions'
class Signin extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signinUser({ email, password });
  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }


  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        {/* E-Mail */}
        <fieldset className="form-group">
          <label>E-Mail:</label>
          <Field name="email" component="input" type="email" className="form-control" />
        </fieldset>
        {/* Password */}
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        {/* Submit */}
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

function mapStateToProps(state){
    return { errorMessage: state.auth.error };
}


export default compose(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}), connect(mapStateToProps, actions))(Signin);
