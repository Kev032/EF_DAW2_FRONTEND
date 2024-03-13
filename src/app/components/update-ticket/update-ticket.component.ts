import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Category } from '../../models/category';
import { Kind } from '../../models/kind';
import { Priority } from '../../models/priority';
import { Project } from '../../models/project';
import { Status } from '../../models/status';
import { User } from '../../models/user';
import { CategoryService } from '../../services/category.service';
import { KindService } from '../../services/kind.service';
import { PriorityService } from '../../services/priority.service';
import { StatusService } from '../../services/status.service';
import { UserService } from '../../services/user.service';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrl: './update-ticket.component.css'
})
export class UpdateTicketComponent implements OnInit {

  id:number
  ticket: Ticket = new Ticket();
  categories: Category[] = [];
  kinds: Kind[] = [];
  priorities: Priority[] = [];
  projects: Project[] = [];
  status: Status[] = [];
  users: User[] = [];

  constructor(private categoryService: CategoryService, private kindService: KindService, private priorityService: PriorityService, private projectService: ProjectService, private statusService: StatusService, private userService: UserService, private ticketService:TicketService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ticketService.getTicketById(this.id).subscribe(dato => {
      this.ticket = dato;
    },error => console.log(error));
  }

  redirigirListaTicket(){
    this.router.navigate(['/ticket']);
  }

  onSubmit() {
    this.ticketService.updateTicket(this.id,this.ticket).subscribe(
      (dato) => {
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: "Expediente actualizado correctamente!",
          text: "El expediente se ha actualizado con éxito.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirigir a la lista de contribuyentes
          this.redirigirListaTicket();
        });
      },
      (error) => {
        // Manejar el error en caso de que la actualización falle
        console.error(error);
        this.snack.open('Error al actualizar el expediente', 'Aceptar', { duration: 3000 });
      }
    );
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
