import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${baserUrl}/user`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${baserUrl}/user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${baserUrl}/user`, user);
  }

  updateUser(id: number,user: User): Observable<Object>{
    return this.http.put(`${baserUrl}/user/${id}`, user)
  }

  deleteUser(id:number):Observable<Object>{
    return this.http.delete(`${baserUrl}/user/${id}`)
  }
}
