
import { client } from './';
export const FETCH_CONTACTS='FETCH_CONTACTS';


const url_fetchContact='/StudentApi/contactAll';
const url_addContact='/StudentApi/addContact';

  export  function fetchContacts(){
    return dispatch => {
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: client.get(url_fetchContact)
      })
    }
  }

  export function newContact(){
      return dispatch =>{
          dispatch({
              type:'NEW_CONTACT'
          })
      }
  }

  export function saveContact(datas){
    return dispatch=>{
        dispatch({
            type:'SAVE_CONTACT',
            payload:client.post(url_addContact,datas)
        })
    }
  }