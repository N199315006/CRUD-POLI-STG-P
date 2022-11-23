import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/model/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {

  programaSet: Programa[];
  programaFil: Programa[];
  collectionSize: number;
  closeModal: string;
  idprograma: string;
  searchTerm: string;
  currentPrograma = null;
  currentIndex = -1;
  msgError = '';


  constructor(private programaService: ProgramaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.refreshList();
  }

  //buscar programa
  search(value: string): void{
    this.programaFil = this.programaSet.filter((val) => val.escuela.toLowerCase().includes(value));
    this.collectionSize = this.programaFil.length;
  }


  //visualizar Programas
  retrieveProgramas(): void{
    this.programaService.getAll()
    .subscribe(
      data =>{
        this.programaSet = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }

  retrievePrograma(val: string):void{
    this.programaService.get(val)
    .subscribe(
      data =>{
        this.currentPrograma = data;
        console.log(data);
      },
      error =>{
        this.msgError = error.message + ' \n' + error.error.message;
        console.log(error);
      }
    );
  }


  //Actualizar Programa

  updatePrograma(): void{
    this.programaService.update(this.currentPrograma.codigo, this.currentPrograma)
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

  //Borrar Programa

  deletePrograma(val1: string):void{
    this.programaService.delete(val1)
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


  setActivePrograma(programa : Programa, index: number): void{
    this.currentPrograma = programa;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.retrieveProgramas();
  }

//Emergent Window Edit (exit: x or esc or click backdrop)
triggerModal(content:any, val:Programa) {
  this.currentPrograma = val
  this.retrievePrograma(this.currentPrograma.id)
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
