import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface/user';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:User
img='assets/defaut.png'
  constructor(private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data:User) { }

  ngOnInit() {
    if(this.data.imageName=='null'){
      this.img='assets/defaut.png'
    }else{
      this.img='assets/images/users/'+this.data.imageName
    }
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
