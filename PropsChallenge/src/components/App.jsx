import React from 'react';
import Cards from './Cards'
import Avatar from './Avatar';
import Contacts from '../contacts';

function createCard(contact){
  
  return <Cards  id={contact.id} key={contact.id} name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email}/>
}

function App() {

  return (<div>
  <Avatar img="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/106702527_1502909056536253_6804356076312406835_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=t1IJxMKSEUgAX8zO-A-&_nc_ht=scontent-mia3-1.xx&oh=58538c092acc6cfce69dadd1c67fdbd0&oe=5F4AF1B8"/>
  <h1 className="heading">My Contacts</h1>

  {Contacts.map(createCard)}

  </div> 
  
  );
}

export default App;
