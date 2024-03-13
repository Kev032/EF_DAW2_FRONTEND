import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{

  id:number
  user:User = new User();
  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute, private snack:MatSnackBar){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(dato =>{
      this.user = dato;
    },error => console.log(error));
  }

  redirigirListaUser(){
    this.router.navigate(['/user']);
  }

  onSubmit() {
    this.userService.updateUser(this.id, this.user).subscribe(
      (dato) => {
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: "User actualizado correctamente!",
          text: "El usuario se ha actualizado con éxito.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirigir a la lista de contribuyentes
          this.redirigirListaUser();
        });
      },
      (error) => {
        // Manejar el error en caso de que la actualización falle
        console.error(error);
        this.snack.open('Error al actualizar el contribuyente', 'Aceptar', { duration: 3000 });
      }
    );
  }

}
