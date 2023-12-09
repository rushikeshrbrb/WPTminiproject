import axios from "axios";

export async function saveInfo(regData){
    try {
        const response=await axios.post("http://127.0.0.1:4555/subdetail",regData);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }

}
export async function saveNewConnection(regdata){
    try {
        const response=await axios.post("http://127.0.0.1:4555/newconnection",regdata);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

