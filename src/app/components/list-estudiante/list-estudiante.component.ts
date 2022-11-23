import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-estudiante',
  templateUrl: './list-estudiante.component.html',
  styleUrls: ['./list-estudiante.component.css']
})
export class ListEstudianteComponent implements OnInit {

  estudianteSet: Estudiante[];
  estudianteFil: Estudiante[];
  collectionSize: number;
  closeModal: string;
  idestudiante: string;
  searchTerm: string;
  currentEstudiante = null;
  currentIndex = -1;
  msgError = '';
  
 

  constructor(private estudianteService: EstudianteService, private modalService: NgbModal) { }

  ngOnInit(): void {
   this.refreshList(); 
  }
//buscar estudiante
  search(value: string): void{
    this.estudianteFil = this.estudianteSet.filter((val) => val.name.toLowerCase().includes(value));
    this.collectionSize = this.estudianteFil.length;
  }


  //visualizar estudiantes
  retrieveEstudiantes(): void{
    this.estudianteService.getAll()
    .subscribe(
      data =>{
        this.estudianteSet = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }

  retrieveEstudiante(val: string):void{
    this.estudianteService.get(val)
    .subscribe(
      data =>{
        this.currentEstudiante = data;
        console.log(data);
      },
      error =>{
        this.msgError = error.message + ' \n' + error.error.message;
        console.log(error);
      }
    );
  }


  //Actualizar Estudiante

  updateEstudiante(): void{
    this.estudianteService.update(this.currentEstudiante.id, this.currentEstudiante)
    .subscribe(
      data => {
        this.refreshList();
        console.log(data);
      },
      error => {
        console.log(error); 
      }
    );
  }

  //Borrar estudiante

  deleteEstudiante(val1: string):void{
    this.estudianteService.delete(val1)
    .subscribe(
      data =>{
        this.refreshList();
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }


  setActiveEstudiante(estudiante : Estudiante, index: number): void{
    this.currentEstudiante = estudiante;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveEstudiantes();
  }

//Emergent Window Edit (exit: x or esc or click backdrop)
triggerModal(content:any, val:Estudiante) {
  this.currentEstudiante = val
  this.retrieveEstudiante(this.currentEstudiante.id)
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
    this.closeModal = `Closed with: ${res}`;
  }, (res) => {
    this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


  


}
