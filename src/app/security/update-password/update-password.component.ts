import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { PasswordValidator } from 'src/app/class/password-validator';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  hide=true
  public user : User
  msg=''
  constructor(private fb: FormBuilder,
    private auth: AuthService) { }

    passwordForm=new FormGroup({
      plainPassword: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      plainPasswordConfirm: new FormControl('', Validators.required)
    },(formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    })
    account_validation_messages = {
      'plainPasswordConfirm': [
        { type: 'required', message: 'Veuillez confirmer le mot de passe' },
        { type: 'areEqual', message: 'Les mots de passe ne correspondent pas' }
      ],
      'plainPassword': [
        { type: 'required', message: 'mot de passe obligatoire' },
        { type: 'minlength', message: 'le mot de passe doit contenir au moins 6 caracteres' }
      ]
      }

  ngOnInit() {
  }
  updatePassword(){
    console.log(this.passwordForm.value)
    this.auth.getConnecte()
    .subscribe(
      data=>{
        this.user =data
        this.auth.updatePassword(this.user,this.passwordForm.value)
          .subscribe(
            res=>{
              this.msg=res.status
            },
            err=>console.log(err)
          )
      }
    )
    
  }

}
