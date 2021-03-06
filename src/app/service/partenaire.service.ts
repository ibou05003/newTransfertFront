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
  private ajoutUrl="http://localhost:8000/api/partenaire/ajout"
  private rechercheUrl="http://localhost:8000/api/partenaire/rechercher"
  private listePartUrl="http://localhost:8000/api/users/status/partenaire"


  constructor(private http:HttpClient) { }
  
  getPartenaires(): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.listeUrl)
    .pipe(catchError(this.errorHandler))
  }
  setPartenaire(partenaire){
    const formData:FormData=new FormData()
    formData.append('raisonSociale',partenaire.raisonSociale)
    formData.append('ninea',partenaire.ninea)
    formData.append('adresseSociale',partenaire.adresseSociale)
    formData.append('telephoneSiege',partenaire.telephoneSiege)
    formData.append('description',partenaire.description)
    formData.append('nomCompletPersonneRef',partenaire.nomCompletPersonneRef)
    formData.append('emailPersonneRef',partenaire.emailPersonneRef)
    formData.append('emailSiege',partenaire.emailSiege)
    formData.append('telephoneRef',partenaire.telephoneRef)
    formData.append('cniPersonneRef',partenaire.cniPersonneRef)
    formData.append('adressePersonneRef',partenaire.adressePersonneRef)
    formData.append('imageFile',partenaire.imageFile)

    return this.http.post<any>(this.ajoutUrl,formData)
    .pipe(catchError(this.errorHandler))
  }
  /**Recherche partenaire par ninea */
  recherchePartenaire(ninea){
    console.log(ninea)
    return this.http.post<any>(this.rechercheUrl,ninea)
    .pipe(catchError(this.errorHandler))
  }
  /**Bloquer Partenaire */
  bloquer(id){
    return this.http.get<any>(`${this.listePartUrl}/${id}`);
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
