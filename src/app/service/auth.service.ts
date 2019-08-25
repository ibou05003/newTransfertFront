import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

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
  }
  saveToken(jwt: string){
    localStorage.setItem('token',jwt)
    this.jwt=jwt
    this.parseJWT()
  }
  parseJWT(){
    let jwtHelper= new JwtHelperService()
    let jwtObj=jwtHelper.decodeToken(this.jwt)
    this.username=jwtObj.obj
    this.roles=jwtObj.roles
  }

  isAuthenticated(){
    return this.roles && (this.isAdminPartenaire || this.isAdminWari || this.isCaissier || this.isSuperAdminPartenaire || this.isSuperAdminWari || this.isUser)
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
}