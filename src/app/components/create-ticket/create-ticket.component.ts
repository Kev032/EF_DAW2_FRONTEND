import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Category } from '../../models/category';
import { Kind } from '../../models/kind';
import { Priority } from '../../models/priority';
import { Project } from '../../models/project';
import { Status } from '../../models/status';
import { CategoryService } from '../../services/category.service';
import { KindService } from '../../services/kind.service';
import { PriorityService } from '../../services/priority.service';
import { ProjectService } from '../../services/project.service';
import { StatusService } from '../../services/status.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { TicketService } from '../../services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css'
})
export class CreateTicketComponent implements OnInit{

  ticket: Ticket = new Ticket();
  categories: Category[] = [];
  kinds: Kind[] = [];
  priorities: Priority[] = [];
  projects: Project[] = [];
  status: Status[] = [];
  users: User[] = [];

  constructor(private categoryService: CategoryService, private kindService: KindService, private priorityService: PriorityService, private projectService: ProjectService, private statusService: StatusService, private userService: UserService, private ticketService:TicketService, private router: Router){}

  ngOnInit(): void {
    this.getCategory()
    this.getKind()
    this.getPriority()
    this.getProject()
    this.getStatus()
    this.getUser()
  }

  saveTicket() {
    console.log('Datos del ticket antes de enviar:', this.ticket);
    this.ticketService.createTicket(this.ticket).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Redirigir a la página /ticket
        this.redirigirlistaTicket
      },
      error => {
        console.error('Error al enviar el ticket:', error);
        // Mostrar mensaje de error al usuario
      }
    );
  }

  redirigirlistaTicket(){
    this.router.navigate(["/ticket"])
  }

  onSubmit(){
    this.saveTicket()
  }

  getCategory(): void {
    this.categoryService.getAllCategory().subscribe(dato =>{
      this.categories = dato
      console.log(this.categories)
    })
  }

  getKind(): void {
    this.kindService.getAllKind().subscribe(dato =>{
      this.kinds = dato
      console.log(this.kinds)
    })
  }

  getPriority(): void {
    this.priorityService.getAllPriority().subscribe(dato => {
      this.priorities = dato
    })
  }

  getProject(): void {
    this.projectService.getAllProject().subscribe(dato => {
      this.projects = dato
    })
  }

  getStatus(): void {
    this.statusService.getAllStatus().subscribe(dato => {
      this.status = dato
    })
  }

  getUser(): void {
    this.userService.getAllUser().subscribe(dato => {
      this.users = dato
    })
  }

}
