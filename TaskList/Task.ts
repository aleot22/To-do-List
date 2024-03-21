export default class Task {
    description: string;
    completed: boolean;

    constructor(description: string){
        this.description = description;
        this.completed = false;
    }

    complete(){
        this.completed = !this.completed;
    }
}