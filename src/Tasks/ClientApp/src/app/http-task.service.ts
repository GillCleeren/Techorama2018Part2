import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { TaskService } from './task.service';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpTaskService extends TaskService {

  private _tasksUrl = 'tasks';

  constructor(private http: HttpClient) { super(); }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._tasksUrl)
      .catch(this.handleError);
  }

  addTaskToList(task: Task): Observable<Task[]> {
    return this.http.post<Task>(this._tasksUrl, task)
      .switchMap(() => this.getAllTasks())
      .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task[]> {
    return this.http.put<Task>(`${this._tasksUrl}/${task.id}`, task)
      .switchMap(() => this.getAllTasks())
      .catch(this.handleError);
  }

  removeTaskFromList(task: Task): Observable<Task[]> {
    return this.http.delete<Task>(`${this._tasksUrl}/${task.id}`)
      .switchMap(() => this.getAllTasks())
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
  }
}
