import axios from "@plugin/axios";

export default async function UserLogged(){
    let response = await axios.get('api/user');
    return response;
}

