import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { Priority } from '../models/priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  getAllPriority(): Observable<Priority[]> {
    return this.http.get<Priority[]>(`${baserUrl}/priority`);
  }
}
