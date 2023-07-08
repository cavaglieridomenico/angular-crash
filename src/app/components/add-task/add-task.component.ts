import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor() {}

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @ViewChild('addTaskForm') addTaskForm: NgForm;
  text: string;
  day: string;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please, all fields are required.');
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
