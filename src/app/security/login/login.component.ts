import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true
  loginUserData= {}
  errorMsg= ''

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
          this.router.navigate(['/dashboard'])
        },
        error=>{
          this.errorMsg=error.statusText
          if(this.errorMsg=='Unauthorized'){
            this.errorMsg='Login ou Mot de Passe incorrect'
          }
        }
      )
  }

}
