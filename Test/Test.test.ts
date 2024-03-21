import Task from '../TaskList/Task';
import List from '../TaskList/List';
import { it , expect, describe} from 'vitest'

/*El objetivo de este ejercicio es crear una aplicación de lista de tareas utilizando TypeScript y TDD. La aplicación debe tener las siguientes características:

- Permitir añadir una tarea a la lista.

- Permitir marcar una tarea como completada.

- Permitir eliminar una tarea de la lista.

- Mostrar la lista de tareas.
*/

describe('List', () => {
   it('should add a new Task to the list',() => {
    const list = new List();
    const task = new Task('');
    list.addTask(task);
    expect(list.tasks.length).toBe(1); 
   });

   it('should mark Task as completed',()=> {
    const task = new Task ('');
    expect(task.completed).toBe(false);
   });

   it('should removed a Task of the list', () => {
    const task = new Task ('');
    const list = new List ();
    list.addTask(task);
    list.removeTask(task);
    expect(list.tasks.length).toBe(0);
   });
   
})
