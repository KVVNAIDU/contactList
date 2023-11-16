// App.js
import React from 'react';
import ContactList from './components/contactList';
// import ContactForm from './components/addContact';

const App = () => {


  return (
    <div className="bg-primary" style={{height:"100%"}}>
      <ContactList/>
    </div>
  );
};

export default App;
