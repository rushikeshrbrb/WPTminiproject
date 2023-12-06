import React from 'react';
import {
  MDBFooter,
  MDBContainer,
 
  MDBBtn
} from 'mdb-react-ui-kit';

export  function Footer() {
  return (
    <MDBFooter className='text-center fixed-bottom' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        


        <section className='mb-4'>
         <h5>Online Gas Booking</h5>
         
        </section>

      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <h4>CDAC Mumbai</h4>
        
      </div>
    </MDBFooter>
  );
}