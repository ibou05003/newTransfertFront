import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newTransfert';
  user: User
  constructor(private auth: AuthService) { }

  ngOnInit(){
    this.auth.loadToken();
    this.auth.getConnecte()
    .subscribe(
      data=>{
        this.user =data
      }
    )
  }
}
