import React, { Component} from 'react';
import ContactForm from '../component/ContactForm';
import {newContact,saveContact} from '../actions/Actions';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class ContactFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    this.props.newContact();
  }

  submit = (contact) => {
    console.log("contact data on conatctform:",contact);
    return this.props.saveContact(contact).then(function(response) {
        this.setState({ redirect:true }); 
        console.log(response.data)
      })
      .catch(err => {
         throw new SubmissionError(this.props.errors)
       })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ContactForm contact={this.props.contact} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newContact, saveContact})(ContactFormPage);