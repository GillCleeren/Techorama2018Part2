import { Injectable } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority';

import { Observable } from 'rxjs/Observable';


@Injectable()
export abstract class TaskService {

  abstract getAllTasks(): Observable<Task[]>;

  abstract addTaskToList(task: Task): Observable<Task[]>;

  abstract updateTask(task: Task): Observable<Task[]>;
  
  abstract removeTaskFromList(task: Task): Observable<Task[]>;
}
