import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Partenaire } from '../interface/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private listeUrl="http://localhost:8000/api/partenaire/"

  constructor(private http:HttpClient) { }
  
  getPartenaires(): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.listeUrl)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
