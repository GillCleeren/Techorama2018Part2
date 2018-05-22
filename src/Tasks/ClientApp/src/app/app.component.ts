import { Component, OnInit } from '@angular/core';
import { Priority } from './priority';
import { Task } from './task';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _taskService: TaskService) {}

  task$: Observable<Task[]>;

  ngOnInit(): void {
    this.task$ = this._taskService.getAllTasks();
  }

  addTaskToList(task: Task): void {
    this.task$ = this._taskService.addTaskToList(task);
  }

  removeTaskFromList(task: Task): void {
    this.task$ = this._taskService.removeTaskFromList(task);
  }
}
