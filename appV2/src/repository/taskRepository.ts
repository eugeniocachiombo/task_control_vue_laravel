import axios from "@/plugin/axios";

class TaskRepository{
    async list(){
        return (await axios.get('api/v1/tasks')).data;
    }
}

export default TaskRepository