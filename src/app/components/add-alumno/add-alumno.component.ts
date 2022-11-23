import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  estudiante = new  Estudiante();
  submitted = false;
  msgError = '';
  isDisabled = true; 

  constructor(private EstudianteService: EstudianteService) { }

  ngOnInit(): void {
  }

  existsPK (val:string): void {
    this.msgError  = '';
    this.isDisabled = true; 
    this.EstudianteService.get(val)
      .subscribe(
        data => {
          if (data!=null){
            this.msgError  = 'PK exists';
            this.isDisabled = true; 
          } else {
            this.isDisabled = false; 
          }
        },
        error => {
          this.msgError  = '';
          console.log(error);
        });
  }


  saveEstudiante(): void {
    const data = {
      id: this.estudiante.id,
      name: this.estudiante.name,
      apellido: this.estudiante.apellido
    };

    this.EstudianteService.create(data)
      .subscribe(
        data => {
          this.submitted=true;
          console.log(data);
        },
        err => {
          this.msgError  = err.error.message;
          console.log(err);
        });
  }

  newEstudiante() {
    this.submitted = false;
    this.estudiante.id;
    this.estudiante.name;
    this.estudiante.apellido;
    this.isDisabled = true;
  }


}
