import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Versement } from '../interface/versement';
import { Compte } from '../interface/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private compteRechUrl="http://localhost:8000/api/compte/rechercher"
  private verserUrl="http://localhost:8000/api/versement/ajout"
  private verserBCUrl="http://localhost:8000/api/versements"
  private ajoutCUrl="http://localhost:8000/api/compte/ajout"
  private comptePartUrl="http://localhost:8000/api/compte/partenaire"
  private affectUrl="http://localhost:8000/api/compte/affectation"

  constructor(private http:HttpClient) { }

  rechercheCompte(compte){
    console.log(compte)
    return this.http.post<any>(this.compteRechUrl,compte)
    .pipe(catchError(this.errorHandler))
  }
  /**Versement */
  versement(montant,compte){
    console.log(montant)
    return this.http.put<any>(`${this.verserUrl}/${compte.id}`,montant)
    .pipe(catchError(this.errorHandler))
  }
  /**Versement d un compte */
  getVersementByCompte(compte):Observable<Versement[]>{
    console.log(compte)
    return this.http.get<Versement[]>(`${this.verserBCUrl}/${compte.id}`)
    .pipe(catchError(this.errorHandler))
  }
  /**Compte d un partenaire */
  getComptes(partenaire):Observable<Compte[]>{
    console.log(partenaire)
    return this.http.get<Compte[]>(`${this.comptePartUrl}/${partenaire.id}`)
    .pipe(catchError(this.errorHandler))
  }
  /**Compte d un partenaire */
  affectComptes(user,compte):Observable<any>{
    console.log(user)
    console.log(compte)
    return this.http.put<any>(`${this.affectUrl}/${user.id}`,compte)
    .pipe(catchError(this.errorHandler))
  }
  /**Versement d un compte */
  setNewCompte(id):Observable<any>{
    console.log(id)
    return this.http.get<any>(`${this.ajoutCUrl}/${id}`)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
