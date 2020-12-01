import { Libro } from './Model/Libro';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConexionLibroService {

  

  constructor(private http: HttpClient) { }
  private API = 'http://127.0.0.1:8000/api/v1/libros/';
  
  

  public selectedBook:Libro={
    id:null,
    name: '',
    tipo:'',
    mark:'',
    quantity:null,
    price: null,
    year: ' ',
    image:' ',

  };

  // Mostrar datos
  getAllBooks(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.API);
  }
  
  
  addNuevoBook(libro:Libro): Observable<Libro> {
    return this.http.post<Libro>(this.API,libro);
  }



  deleteBook(id): Observable<{}>{
     this.API = `http://127.0.0.1:8000/api/v1/detail/libros/${id}/`;
    return this.http.delete(this.API);
  }
  // ``
  
  updateBook(libro) {
    // TODO: obtener token
    // TODO: not null
    console.log(libro);
    const alumnoId = libro.libroId;
    const API= `http://127.0.0.1:8000/api/v1/detail/libros/${libro.id}/`;
    return this.http.put<Libro>(API,libro);
  }

}
