import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true
  loginUserData= {}
  errorMsg= ''
  public user : User

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res=>{
          let jwt=res.body
          this.auth.saveToken(jwt)
          this.auth.getConnecte()
          .subscribe(
            data=>{
              this.user =data
              this.auth.updateNbConnexion(this.user)
              .subscribe(
                data=>{
                  console.log(res)
                }
              );
              if(this.user.nombreConnexion==0){
                this.router.navigate(['/updatepassword'])
              }else{
                this.router.navigate(['/dashboard'])
              }
            }
          )
        },
        error=>{
          console.log(error)
          this.errorMsg=error.error.message
          if(this.errorMsg=='Bad credentials.'){
            this.errorMsg='Login ou Mot de Passe incorrect'
          }else{
            this.errorMsg=error.error.error.exception[0].message
          }
        }
      )
  }

}
