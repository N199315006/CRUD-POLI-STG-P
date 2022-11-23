import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';

const baseUrl = 'http://localhost:8080/api/v1/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  

  getAll(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(baseUrl);
  }

  get(id: String): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }

  



}
