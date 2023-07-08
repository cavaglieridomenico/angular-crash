import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl, httpOptions);
  }

  deleteSingleTask(param: Task): Observable<Task> {
    const url = `${this.apiUrl}/${param.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  setReminder(param: Task): Observable<Task> {
    const url = `${this.apiUrl}/${param.id}`;
    return this.http.patch<Task>(
      url,
      { reminder: !param.reminder },
      httpOptions
    );
  }

  addTask(param: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, param, httpOptions);
  }
}
