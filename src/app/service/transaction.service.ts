import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private envoiUrl="http://localhost:8000/api/transaction/envoi"

  constructor(private http:HttpClient) { }

  setEnvoi(transaction){
    console.log(transaction)
    return this.http.post<any>(this.envoiUrl,transaction)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
