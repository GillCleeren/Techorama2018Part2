import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Priority } from '../priority';
import { Task } from '../task';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent {
  newTask: Task;
  priorities = [Priority.Low, Priority.Normal, Priority.High];
  @Output() onCreated = new EventEmitter<Task>();

  constructor() {
    this.resetTask();
  }

  addTask(task: Task, event: Event): void {
    this.onCreated.emit(task);
    this.resetTask();

    event.preventDefault();
  }

  private resetTask() {
    this.newTask = { id: 0, description: '',
                     completed: false, priority: Priority.Normal };
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }
}

