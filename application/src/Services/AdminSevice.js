import axios from "axios";

export async function  login(credentials){
    console.log(credentials);
    const response=await axios.post("http://127.0.0.1:4555/admin/login",credentials);
    return response.data;
}