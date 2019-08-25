import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
  hide = true

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(loginUserData){
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res=>{
          let jwt=res.headers.get('Authorization')
          this.auth.saveToken(jwt)
        },
        error=>console.log(error)
      )
  }

}
