import TaskRepository from '@/repository/taskRepository';
import { Listbox } from '../../node_modules/primevue/index';

const repo = new TaskRepository();

const taskStore = {
    async getTask(){
       return await repo.list();
    },
    async createTask(data:any){
        await repo.create(data);
    },
    async updateTask(id:number, data:any){
      await repo.update(id,data);
    },
    async deleteTask(id:number){
      await repo.delete(id);
    },
}

export default taskStore