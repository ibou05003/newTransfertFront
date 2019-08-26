import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl="http://localhost:8000/api/login_check"

  jwt:string
  username:string
  roles: Array <string>
  constructor(private http:HttpClient) { }

  loginUser(user){
    return this.http.post<any>(this.loginUrl,user,{observe:'response'})
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  saveToken(jwt: string){
    localStorage.setItem('token',jwt.token)
    this.jwt=jwt.token
    let jwtHelper= new JwtHelperService()
    let jwtObj=jwtHelper.decodeToken(this.jwt)
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