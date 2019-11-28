import contacts from '../../src/contact-data';

export const FETCH_CONTACTS='FETCH_CONTACTS';

  export  function fetchContacts(){
    return dispatch => {
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: contacts
      })
    }
  }