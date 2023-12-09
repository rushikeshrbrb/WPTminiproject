import React from 'react';
import {
  MDBFooter,
  MDBContainer,
 
  MDBBtn
} from 'mdb-react-ui-kit';

export  function Footer() {
  return (
    <MDBFooter className='text-center fixed-bottom' color='white' bgColor='dark'>
     

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <h3>Online Gas Booking</h3>
        
      </div>
    </MDBFooter>
  );
}