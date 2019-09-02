import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: User
  constructor(private auth: AuthService,
              private router: Router){}
  ngOnInit() {
    this.auth.getConnecte()
    .subscribe(
      data=>{
        this.user =data
      }
    )
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

  logout(){
    this.auth.logout()
    return this.router.navigate(['/login'])
  }

}
