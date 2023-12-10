import { useEffect, useState,useHistory } from "react";
// import {useHistory} from "react-router-dom";
import { Button, Container, Table, Header, Alert, Modal } from "react-bootstrap";
import { deleterCustomerData, fetchCustomerData, saveBookedData } from "../Services/services";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
export function CustomerInfo() {
  const [customers, setCustomers] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [bookGas,setBookGas]=useState({});
  
  const navigate=useNavigate();
  const operModelDialog = () => {
    setShowDialog(true);
  };
  const closeModelDialog = () => {
    setShowDialog(false);
  };

  const handleBookClick = async(c) => {
    
    setBookGas({
      name: c.name,
      city: c.city,
    })
    console.log(bookGas);
    try {
      // Assuming there is a saveBookedData function in your services
      await saveBookedData(bookGas);
      console.log("Booked data submitted successfully:", bookGas);
      // Optionally, you can reset the bookGas state after submission
      setBookGas({});
    } catch (error) {
      console.error("Error submitting booked data:", error);
    }
  };

//history hook use to redirect certain url
  async function populateData() {
    try {
      const data = await fetchCustomerData();

      setCustomers(data.NewConnections);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    populateData();
  }, []);
  const handledeleteData = async () => {
    try {
      await deleterCustomerData(selectedName);
      populateData();
      closeModelDialog();
    } catch (error) {
      console.log(error);
    }
  };

//   const handleEditClick = () => {
//         // navigate(`/edit/${selectedName}`);
//   }
  return (
    <>
    <NavigationBar></NavigationBar>
    <div>
      {/* <Header text="List of all the Customers"> </Header> */}
      {customers.length !== 0 ? (
        <Table className="mt-3">
          <thead className="">
            <tr>
              <th>Name:""</th>
              <th>Email:</th>
              <th>Phone:</th>
              <th>Date:</th>
              <th>Nation:</th>
              <th>Address:</th>
              <th>Status:</th>
              <th>City:</th>
              <th>Zip:</th>
              <th>delete</th>
              <th>update</th>
              <th>Book</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => {
              return (
                <tr>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.date}</td>
                  <td>{c.nation}</td>
                  <td>{c.address}</td>
                  <td>{c.status}</td>
                  <td>{c.city}</td>
                  <td>{c.zip}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        // handledeleteData(c.name);
                        operModelDialog();
                        setSelectedName(c.name);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button variant="primary" onClick={()=>{
                        setSelectedName(c.name);
                        navigate(`/edit/${c.name}`);
                    }}>Edit</Button>
                  </td>
                  <td><Button onClick={() => handleBookClick(c)}>Book</Button ></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h5>No Data Available</h5>
      )}
      <Modal show={showDialog} onHide={closeModelDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do You really Want To Delete Customer</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{
            handledeleteData()
          }}>
            Yes
          </Button>
          <Button variant="danger" onClick={closeModelDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}
