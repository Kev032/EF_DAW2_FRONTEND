import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent  implements OnInit{

  user: User = new User();

  constructor(private userService: UserService,private router:Router){}


  ngOnInit(): void {
  }

  createUser(){
    console.log(this.user)
    this.userService.createUser(this.user).subscribe(dato => {
      console.log(dato);
      this.redirigirListaUser();

      // Mostrar alerta de éxito con SweetAlert
      Swal.fire({
        title: 'User guardado!',
        text: 'El usuario se ha registrado correctamente.',
        icon: 'success'
      });
    }, error => console.log(error));
  }

  redirigirListaUser(){
    this.router.navigate(['/user']);
  }

  onSubmit(){
    this.createUser()
  }



}
