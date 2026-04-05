import axios from "@/plugin/axios";

class UserRepository{
    async logged(){
        return (await axios.get('api/user')).data;
    }
    async list(){
        return (await axios.get('api/v1/users')).data;
    }
    async create(data:any){
        return (await axios.post('api/v1/users', data)).data;
    }
    async update(id:number, data:any){
        return (await axios.put('api/v1/users/'+id, data)).data;
    }
    async delete(id:number){
        return (await axios.delete('api/v1/users/'+id)).data;
    }
}

export default UserRepository