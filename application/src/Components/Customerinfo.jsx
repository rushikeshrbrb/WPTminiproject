import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export function connectionInfo(){
 const [Customers,setCustomers]=useState([connection]);
 async function fetchcustomerData(){
    try {
        const data=await populateCustmoreData();
        setCustomers(data);
    } catch (error) {
        console.log(error);
    }

 }
 useEffect(()=>{
    populateCustmoreData();

 },[]);
    return(
        <Container>
            <Header text="All  Information  about Customers " />

        </Container>

    );

}