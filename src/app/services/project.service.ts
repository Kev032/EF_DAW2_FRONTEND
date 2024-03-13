import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${baserUrl}/project`);
  }
}
