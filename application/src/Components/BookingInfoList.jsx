import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchCustomerBookData } from "../Services/services";
import { NavigationBar } from "./NavigationBar";




export function BookingInfoList() {
    const [customers, setCustomers] = useState([]);



    async function populateData() {
        try {
          const data = await fetchCustomerBookData();
    
          setCustomers(data.result);
          //   console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        populateData();
      }, []);

      return(
        <>
        <NavigationBar></NavigationBar>
        <Table className="mt-3">
          <thead className="">
            <tr>
              <th>Name:</th>
             
              <th>City:</th>
              
            </tr>
          </thead>
          

          <tbody>
            {customers.map((c) => {
              return (
                <tr>
                  <td>{c.name}</td>
                  
                  <td>{c.city}</td>
                 </tr>
              );
              })};
          </tbody>
          </Table>
          </>
      )


}