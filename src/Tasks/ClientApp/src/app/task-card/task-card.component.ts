import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Priority } from '../priority';
import { Task } from '../task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task: Task;
  @Output() onCompleted = new EventEmitter<Task>();
  @Output() onCancelled = new EventEmitter<Task>();

  low = Priority.Low;
  normal = Priority.Normal;
  high = Priority.High;

  setCompleted(task: Task) {
    task.completed = !task.completed;
    this.onCompleted.emit(task);
  };

}
