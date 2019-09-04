import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Tarif } from '../interface/tarif';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private envoiUrl="http://localhost:8000/api/transaction/envoi"
  private retUrl="http://localhost:8000/api/transaction/retrait"
  private codeUrl="http://localhost:8000/api/transaction/recherchecode"
  private tarifUrl="http://localhost:8000/api/transaction/tarif"

  constructor(private http:HttpClient) { }

  /**Envoi */
  setEnvoi(transaction){
    console.log(transaction)
    return this.http.post<any>(this.envoiUrl,transaction)
    .pipe(catchError(this.errorHandler))
  }
  /**Retrait */
  setRetrait(transaction){
    console.log(transaction)
    return this.http.post<any>(this.retUrl,transaction)
    .pipe(catchError(this.errorHandler))
  }
  /**Recherche du code */
  getCode(code){
    const data={
      code:code
    }
    console.log(data)
    return this.http.post<any>(this.codeUrl,data)
    .pipe(catchError(this.errorHandler))
  }
  /**tarif */
  getFrais(montant):Observable<Tarif[]>{
    const data={
      montant:montant
    }
    return this.http.post<Tarif[]>(this.tarifUrl,data)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
