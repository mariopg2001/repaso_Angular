import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canciones } from './canciones';
import { Letra } from './letra';

@Injectable({
  providedIn: 'root'
})
export class JamendoService {
 

  constructor( private http: HttpClient) { }
  getcancion(url: string): Observable<Canciones[]> {
    
    return this.http.get<Canciones[]>(url)
  }
  getletra(url: string): Observable<Letra[]> {
    return this.http.get<Letra[]>(url)
  }
}
