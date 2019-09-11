import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  data: User
  img='assets/defaut.png'
    constructor(private auth: AuthService,
                private router: Router){}

  ngOnInit() {
    this.auth.getConnecte()
    .subscribe(
      data=>{
        this.data =data
        if(this.data.imageName!='null'){
          this.img='assets/images/users/'+this.data.imageName
        }
      },
      err=>{
        this.auth.logout();
      }
    )
  }
  /**Gestion role */
  fonction(roles){
    let fonc;
    if(roles[0]=='ROLE_SuperAdminPartenaire' || roles[0]=='ROLE_AdminPartenaire' || roles[0]=='ROLE_AdminWari' || roles[0]=='ROLE_SuperAdminWari'){
      fonc='Administrateur';
    }
    else if(roles[0]=='ROLE_Caissier'){
      fonc='Caissier';
    }
    else if(roles[0]=='ROLE_UserSimple'){
      fonc='Utilisateur';
    }
    return fonc;
  }
}
