import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

//redux-form tutorial https://redux-form.com/6.6.1/docs/gettingstarted.md/
const validate = (values) => {
  const errors = {};
  if( !values.firstName) {
    errors.firstName = {
      message: 'You need to provide  First Name'
    }
  }
  if( !values.lastName) {
    errors.lastName = {
      message: 'You need to provide  Last Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}
class ContactForm extends Component {
    
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
          <label>{label}</label>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
      )

      componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
        const { contact } = nextProps;
        if(contact.id !== this.props.contact.id) { // Initialize form only once
          this.props.initialize(contact)
        }
      }

  render() {

    const {handleSubmit,pristine,submitting,loading} =this.props;

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="firstName" type="text" component={this.renderField} label="First Name"/>
              <Field name="lastName" type="text" component={this.renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact',validate})(ContactForm);