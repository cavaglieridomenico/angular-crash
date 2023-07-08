import { Component, OnInit, OnChanges } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(param: Task) {
    this.taskService
      .deleteSingleTask(param)
      .subscribe(() =>
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
      );
  }

  toggleReminder(param: Task) {
    this.taskService
      .setReminder(param)
      .subscribe(() =>
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
      );
  }

  addTask(param: Task) {
    this.taskService
      .addTask(param)
      .subscribe(() =>
        this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
      );
  }
}
