import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./Components/NavigationBar";
import {Footer} from "./Components/Footer";
import { Home } from "./Components/Home";
import {Login} from "./Components/Login";
import {Registration} from "./Components/Registration";
import { NewConnection } from "./Components/NewConnection";
import { CustomerInfo } from "./Components/Customerinfo";
import {EditCustomerData} from "./Components/EditCustomerData";
import { BookingInfoList } from "./Components/BookingInfoList";

function App() {
  return (
    <BrowserRouter>
     
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            
            
            <Route path='/register' element={<Registration></Registration>}></Route>
            
            <Route path='/newConnection' element={<NewConnection></NewConnection>}></Route>
            <Route path='/customerInfo' element={<CustomerInfo></CustomerInfo>}></Route>
            <Route path='/edit/:name' element={<EditCustomerData></EditCustomerData>}></Route>
            <Route path='bookingInfo' element={<BookingInfoList></BookingInfoList>}></Route>
            
          </Routes>
        <Footer></Footer>
    
    </BrowserRouter>
  );
}

export default App;
