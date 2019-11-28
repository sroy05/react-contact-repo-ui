import React from 'react';

import ContactListPage from './Container/ContactListpage';
import ContactFormPage from './Container/ContactFormPage';
import {Route,NavLink } from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render(){
    return (
      <Container>
        <div className='ui two item menu'>
        <NavLink className="item" activeClassName="active" exact to="/">
            Contact Lists
         </NavLink>  
         <NavLink className='item' activeClassName='active' exact to='/newContact' >
            Add Contact
         </NavLink> 
         </div>
         <Route exact path='/' component={ContactListPage}></Route>
         <Route exact path='/contacts/new' component={ContactFormPage}></Route>
         <Route path='/contacts/edit/:_id' component={ContactFormPage}></Route>       
      </Container>
    
   );
  }
 
}

export default App;
