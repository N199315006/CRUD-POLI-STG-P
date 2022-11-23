import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { AddProgramaComponent } from './components/add-programa/add-programa.component';
import { ListProgramComponent } from './components/list-program/list-program.component';
import { ListEstudianteComponent } from './components/list-estudiante/list-estudiante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AddProgramaComponent,
    ListProgramComponent,
    ListEstudianteComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
