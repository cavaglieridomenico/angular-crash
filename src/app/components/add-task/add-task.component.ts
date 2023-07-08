import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  showAddTask: boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @ViewChild('addTaskForm') addTaskForm: NgForm;
  text: string;
  day: string;
  reminder: boolean = false;

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please, all fields are required.');
      return;
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
