import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { AddProgramaComponent } from './components/add-programa/add-programa.component';
import { ListEstudianteComponent } from './components/list-estudiante/list-estudiante.component';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LoginComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'list', component: ListEstudianteComponent },
  { path: 'add', component: AddAlumnoComponent },
  { path: 'list2', component: ListProgramComponent },
  { path: 'add2', component: AddProgramaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
