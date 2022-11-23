import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa } from '../model/programa';

const baseUrl = 'http://localhost:8080/api/v1/Programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Programa[]>{
    return this.http.get<Programa[]>(baseUrl);
  }

  get(codigo: String): Observable<Programa>{
    return this.http.get<Programa>(`${baseUrl}/${codigo}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(codigo: string, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${codigo}`, data);
  }

  delete(codigo: string): Observable<any>{
    return this.http.delete(`${baseUrl}/${codigo}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }


}
