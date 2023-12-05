import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./Components/NavigationBar";
import {Footer} from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
     <NavigationBar></NavigationBar>
          <Routes>
            {/* <Route path="/" element={<Home></Home>}></Route>
            <Route path='/register' element={<RegistrationForm></RegistrationForm>}></Route>
            <Route path='/students-list' element={<StudentsList></StudentsList>}></Route>
            // <Route path='/students-filter' element={<StudentsFilter></StudentsFilter>}></Route> */}
          </Routes>
        <Footer></Footer>
    
    </BrowserRouter>
  );
}

export default App;
