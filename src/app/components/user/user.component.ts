import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users: User[];

  constructor(private userService:UserService,private router:Router) {}

  ngOnInit(): void {
    this.GetAllUser();
  }

  updateUser(id:number){
    this.router.navigate(['update-user',id]);
  }

  CreateUser(){
    this.router.navigate(['create-user'])
  }

  private GetAllUser(){
    this.userService.getAllUser().subscribe(dato => {
      this.users = dato;
    })
  }

  deleteUser(id:number){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Confirma si deseas eliminar al usuario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: 'No, cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(dato => {
          console.log(dato);
          this.GetAllUser();
        })
        Swal.fire({
          title: "Usuario eliminado",
          text: "El usuario ha sido eliminado con éxito",
          icon: "success"
        });
      }
    });
  }

}
