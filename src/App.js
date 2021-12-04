import React from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';

function App  () {
       return (
      
        <div>
          <ProfilePhoto />
          <FullName/>
          <Adresse/>
        </div>
       );
}
export default App;
