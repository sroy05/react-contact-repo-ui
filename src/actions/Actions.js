import contacts from '../../src/contact-data';
import { client } from './';
export const FETCH_CONTACTS='FETCH_CONTACTS';


const url='/StudentApi/contactAll';

  export  function fetchContacts(){
    return dispatch => {
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: client.get(url)
      })
    }
  }