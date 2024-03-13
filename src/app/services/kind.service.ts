import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kind } from '../models/kind';

@Injectable({
  providedIn: 'root'
})
export class KindService {

  constructor(private http: HttpClient) { }

  getAllKind(): Observable<Kind[]> {
    return this.http.get<Kind[]>(`${baserUrl}/kind`);
  }
}
