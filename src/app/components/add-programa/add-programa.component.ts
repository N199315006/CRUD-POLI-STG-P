import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/services/programa.service';

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styleUrls: ['./add-programa.component.css']
})
export class AddProgramaComponent implements OnInit {

  programa = new Programa();
  submitted = false;
  msgError = '';
  isDisabled = true;


  constructor(private ProgramaService: ProgramaService) { }

  ngOnInit(): void {
  }

  existsPK (val:string): void {
    this.msgError  = '';
    this.isDisabled = true; 
    this.ProgramaService.get(val)
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


  savePrograma(): void {
    const data = {
      codigo: this.programa.codigo,
      escuela: this.programa.escuela,
      tPrograma: this.programa.tPrograma
    };

    this.ProgramaService.create(data)
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

  newPrograma() {
    this.submitted = false;
    this.programa.codigo;
    this.programa.escuela;
    this.programa.tPrograma;
    this.isDisabled = true;
  }


}
