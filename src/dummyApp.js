import './App.css';
import React from 'react';
import NavbarClass from './navbarClass';

function App() {


  return (
      <div style={{ 
        backgroundImage: `url("https://images.unsplash.com/photo-1500900173725-e0978c945e23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHdlZGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")` 
      }}> 
       <NavbarClass />
   </div>
  );
}

export default App;
