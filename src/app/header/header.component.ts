import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connect=false

  constructor(private auth: AuthService){}
  ngOnInit() {
  }
  isAuthenticated(){
    return this.auth.isAuthenticated()
  }

  isSuperAdminWari(){
    return this.auth.isSuperAdminWari()
  }
  isAdminWari(){
    return this.auth.isAdminWari()
  }
  isCaissier(){
    return this.auth.isCaissier()
  }
  isSuperAdminPartenaire(){
    return this.auth.isSuperAdminPartenaire()
  }
  isAdminPartenaire(){
    return this.auth.isAdminPartenaire()
  }
  isUser(){
    return this.auth.isUser()
  }



}
