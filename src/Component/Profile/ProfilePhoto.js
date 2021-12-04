import React, { Component } from 'react'; 
import myimage from '../../MyPicture.jpg';

const ProfilePhoto =() => {
    return (
        <div>
          <img src = {myimage} className='App-logo'/>
          <br/>
          <h1 className='helktiba' > hey this is my photo </h1>
          <br/>
     </div>
     )
};
 export default ProfilePhoto ; 


