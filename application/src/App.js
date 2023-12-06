import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./Components/NavigationBar";
import {Footer} from "./Components/Footer";
import { Home } from "./Components/Home";
import {Login} from "./Components/Login";
import {Registration} from "./Components/Registration";
import { NewConnection } from "./Components/NewConnection";

function App() {
  return (
    <BrowserRouter>
     <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            
            
            <Route path='/register' element={<Registration></Registration>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/newConnection' element={<NewConnection></NewConnection>}></Route>
            
          </Routes>
        <Footer></Footer>
    
    </BrowserRouter>
  );
}

export default App;
