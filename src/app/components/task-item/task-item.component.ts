import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<any> = new EventEmitter();
  faTimes = faTimes;

  onDelete(param: Task) {
    this.onDeleteTask.emit(param);
  }

  onToggle(param: Task) {
    this.onToggleReminder.emit(param);
  }
}
