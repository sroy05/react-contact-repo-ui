

const defaultState = {
    contacts: [],
    contact:{name:{}},
    loading:false,
    error:''
  }
  
  export default (state=defaultState, action={}) => {
      console.log(action.payload);
      console.log(action.type);
      console.log("conatc data:",state.contact);
    switch (action.type) {
      case 'FETCH_CONTACTS_FULFILLED': 
            return {
            ...state,
            contacts: action.payload.data
    }
    
    case 'NEW_CONTACT': {
        return {
          ...state,
          contact: {name:{}}
        }
      }
    case 'SAVE_CONTACT_PENDING':
        return {
            ...state,
            loading:true
        }
        case 'SAVE_CONTACT_FULFILLED':
            return {
                ...state,
                contacts:[...state.contacts,action.payload.data],
              
                loading:false,
                error:{}
            }
        case 'SAVE_CONTACTS_REJECTED':
            const data=action.payload.response.data
            const { "name.first":first, "name.last":last, phone, email } = data.errors;
            const errors = { global: data.message, name: { first,last }, phone, email };
            return {
                ...state,
                error:errors,
                loading:false
            }

      default:
        return state;
    
  }
}