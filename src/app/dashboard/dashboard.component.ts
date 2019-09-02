import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router){}
ngOnInit() {
  if(!this.isAuthenticated){
    return this.router.navigate(['/login'])
  }
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
