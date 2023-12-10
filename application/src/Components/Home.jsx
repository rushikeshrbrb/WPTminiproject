import img from "../Images/bharat-gas-booking.jpg";
import Image from 'react-bootstrap/Image';
import "../Styles/Home.css"
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";

export function Home(){

    
    return(
        
      <>
      <NavigationBar></NavigationBar>
        <div>
            <div className="heading">
                    <h1>Welcome to gas booking</h1>
            </div>
            <div >
                    <Image src={img} className="bgimage"></Image>
            </div>
            
            </div>

            </>

    )
}