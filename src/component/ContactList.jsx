import React from 'react';
import ContactCard  from './contact-card';

export default function ContactList({contacts}){

const list=()=>{
    return contacts.map((contact)=>
    <ContactCard key={contact._id} contact={contact}/>
        )
}

  return (
    <div>
      <li >
        {list()}
      </li>
    </div>
  )
}

