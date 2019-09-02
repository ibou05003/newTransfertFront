import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private loginUrl="http://localhost:8000/api/login_check"
  private userUrl="http://localhost:8000/api/users/userconnecte"
  private registerUrl="http://localhost:8000/api/users/register"
  private nbcUrl="http://localhost:8000/api/users"
  private listeUrl="http://localhost:8000/api/users/usersysteme"
  private listePartUrl="http://localhost:8000/api/users/userpartenaire"

  jwt:string
  username:string
  roles: Array <string>
  constructor(private http:HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this.loginUrl,user,{observe:'response'})
    .pipe(catchError(this.errorHandler))
  }
  /**User Connecte */
  getConnecte(): Observable<User>{
    return this.http.get<User>(this.userUrl)
    .pipe(catchError(this.errorHandler))
  }
  updateNbConnexion(user){
    return this.http.put<any>(`${this.nbcUrl}/${user.id}/nbconnexion`,user)
    .pipe(catchError(this.errorHandler))
  }
  /**Reinitialisation Mot de passe */
  updatePassword(user,password){
    return this.http.put<any>(`${this.nbcUrl}/password/${user.id}`,password)
    .pipe(catchError(this.errorHandler))
  }
  /**Liste des Utilisateurs du systeme */
  getUsersSysteme(): Observable<User[]>{
    return this.http.get<User[]>(this.listeUrl)
    .pipe(catchError(this.errorHandler))
  }
  /**Liste des Utilisateurs d'un partenaire */
  getUsersPart(partenaire): Observable<User[]>{
    return this.http.get<User[]>(`${this.listePartUrl}/${partenaire.id}`)
    .pipe(catchError(this.errorHandler))
  }
  /**Ajout Utilisateur */
  setUser(user) {
    const formData:FormData=new FormData()
    formData.append('nomComplet',user.nomComplet)
    formData.append('email',user.email)
    formData.append('telephone',user.telephone)
    formData.append('cni',user.cni)
    formData.append('adresse',user.adresse)
    formData.append('role',user.role)
    formData.append('plainPassword',user.plainPassword)
    formData.append('imageFile',user.imageFile)

    return this.http.post<any>(this.registerUrl,formData)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  /**Gestion du token */
  saveToken(jwt: string){
    localStorage.setItem('token',jwt['token'])
    this.jwt=jwt['token']
    let jwtHelper= new JwtHelperService()
    let jwtObj=jwtHelper.decodeToken(this.jwt)
    console.log(jwtObj)
    this.username=jwtObj.username
    this.roles=jwtObj.roles
  }
  

  isAuthenticated(){
    return this.roles && (this.isAdminPartenaire() || this.isAdminWari() || this.isCaissier() || this.isSuperAdminPartenaire() || this.isSuperAdminWari() || this.isUser())
  }
  isSuperAdminWari(){
    return this.roles.indexOf('ROLE_SuperAdminWari')>=0
  }
  isAdminWari(){
    return this.roles.indexOf('ROLE_AdminWari')>=0
  }
  isCaissier(){
    return this.roles.indexOf('ROLE_Caissier')>=0
  }
  isSuperAdminPartenaire(){
    return this.roles.indexOf('ROLE_SuperAdminPartenaire')>=0
  }
  isAdminPartenaire(){
    return this.roles.indexOf('ROLE_AdminPartenaire')>=0
  }
  isUser(){
    return this.roles.indexOf('ROLE_UserSimple')>=0
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
  }
  loadToken() {
    this.jwt=localStorage.getItem('token')
    let jwtHelper= new JwtHelperService()
    let jwtObj=jwtHelper.decodeToken(this.jwt)
    this.username=jwtObj.username
    this.roles=jwtObj.roles
  }
}