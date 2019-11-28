

const defaultState = {
    contacts: [],
    loading:false,
    error:''
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      case 'FETCH_CONTACTS_SUCCESS': 
            return {
            ...state,
            contacts: action.payload.data||action.payload.data.data,
            loading:false,
            error:''

    }
      default:
        return state;
    
  }
}