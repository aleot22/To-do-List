import  Task  from './Task';

export default class List {
    tasks: Task[];

    constructor(){
        this.tasks =[];
    }
    addTask(task: Task) {
        this.tasks.push(task);
    }
    removeTask(task: Task){
        this.tasks = this.tasks.filter(t => t !== task);
    }
}
