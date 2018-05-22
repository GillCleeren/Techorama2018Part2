import { Injectable } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MockTaskService extends TaskService {

  private tasks : Task[] = [
    {
      id: 1, description: 'fix heisenbug',
      completed: false, priority: Priority.Normal
    },
    {
      id: 2, description: 'set up fear-driven development',
      completed: false, priority: Priority.High
    },
    {
      id: 3, description: 'fix hindenbug',
      completed: false, priority: Priority.Low
    }
  ];

  getAllTasks(): Observable<Task[]> {
    return Observable.of(this.tasks);
  }

  addTaskToList(task: Task): Observable<Task[]> {
    task.id = 1+this.tasks.reduce((id, task) => Math.max(id, task.id), 0);
    this.tasks = this.tasks.concat(task);
    return Observable.of(this.tasks);
  }

  updateTask(task: Task) : Observable<Task[]> {
    return Observable.of(this.tasks);
  }

  removeTaskFromList(task: Task): Observable<Task[]> {
    this.tasks = this.tasks.filter(t => t.id != task.id);
    return Observable.of(this.tasks);
  }
}
