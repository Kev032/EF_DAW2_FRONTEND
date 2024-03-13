import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './components/ticket/ticket.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';
import { UserComponent } from './components/user/user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { InicioComponent } from './page/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch:'full'},
  { path: 'ticket', component: TicketComponent, pathMatch: 'full'},
  { path: 'create-ticket', component: CreateTicketComponent, pathMatch: 'full'},
  { path: 'update-ticket/:id', component: UpdateTicketComponent, pathMatch: 'full'},
  { path: 'user', component: UserComponent, pathMatch: 'full'},
  { path: 'create-user', component: CreateUserComponent, pathMatch: 'full'},
  { path: 'update-user/:id', component: UpdateUserComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
