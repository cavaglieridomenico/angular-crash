import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiServices: UiService, private router: Router) {
    this.subscription = this.uiServices
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiServices.toggleAddTask();
  }

  hasRoute(route: string) {
    console.log(this.router.url, route === this.router.url);
    return route === this.router.url;
  }
}
