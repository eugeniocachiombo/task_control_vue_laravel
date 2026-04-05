import axios from "@/plugin/axios";

class TaskRepository{
    async list(){
        return (await axios.get('api/v1/tasks')).data;
    }
    async create(data:any){
        return (await axios.post('api/v1/tasks', data)).data;
    }
    async update(id:number, data:any){
        return (await axios.put('api/v1/tasks/'+id, data)).data;
    }
    async delete(id:number){
        return (await axios.delete('api/v1/tasks/'+id)).data;
    }
}

export default TaskRepository