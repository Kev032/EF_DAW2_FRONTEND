import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${baserUrl}/ticket`);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${baserUrl}/ticket/${id}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${baserUrl}/ticket`, ticket);
  }

  updateTicket(id: number,ticket: Ticket): Observable<Object>{
    return this.http.put(`${baserUrl}/ticket/${id}`, ticket)
  }

  deleteTicket(id:number):Observable<Object>{
    return this.http.delete(`${baserUrl}/ticket/${id}`)
  }
}
