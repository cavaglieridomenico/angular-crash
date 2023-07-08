import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
