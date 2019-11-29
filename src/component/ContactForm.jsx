import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

//redux-form tutorial https://redux-form.com/6.6.1/docs/gettingstarted.md/
class ContactForm extends Component {
    
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({error:touched && error})}>
          <label>{label}</label>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
      )

  render() {

    const {handleSubmit,pristine,submitting,loading} =this.props;

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name.first" type="text" component={this.renderField} label="First Name"/>
              <Field name="name.last" type="text" component={this.renderField} label="Last Name"/>
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

export default reduxForm({form: 'contact'})(ContactForm);