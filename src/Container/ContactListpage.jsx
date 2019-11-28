import React, { Component} from 'react';
import ContactList from '../component/ContactList';
import {connect} from 'react-redux';
import { fetchContacts } from '../actions/Actions';


class ContactListPage extends Component {

componentDidMount(){
    this.props.fetchContacts();
}

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contactState}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        contactState : state.contactStore.contacts
    }
  }


export default connect(mapStateToProps,{fetchContacts})(ContactListPage);