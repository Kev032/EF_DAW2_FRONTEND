import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit{
  tickets: Ticket[] = [];
  newTicket: Ticket = {} as Ticket; // Initialize empty object

  constructor(private ticketService: TicketService, private router:Router) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getAllTicket().subscribe(data => {
      this.tickets = data;
      console.log(this.tickets); // Imprime los datos en la consola
    });
  }

  createTicket(){
    this.router.navigate(['create-ticket']);
  }

  updateTicket(id:number){
    this.router.navigate(['update-ticket',id])
  }

  deleteTicket(id:number){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Confirma si deseas eliminar el Ticket",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: 'No, cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        this.ticketService.deleteTicket(id).subscribe(dato => {
          console.log(dato);
          this.getTickets();
        })
        Swal.fire({
          title: "Ticket eliminado",
          text: "El Ticket ha sido eliminado con éxito",
          icon: "success"
        });
      }
    });
  }

}
