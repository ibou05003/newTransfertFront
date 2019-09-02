import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData:User
  user: User
  msg=''
  errorMsg=''
  
  constructor(private fb: FormBuilder,
              private auth: AuthService) { }
  selected = '1';
  imageUrl:string ="assets/defaut.png"
  fileToLoad: File=null

  userForm=new FormGroup({
    nomComplet: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    plainPassword: new FormControl('', Validators.compose([
      Validators.minLength(6),
      Validators.required
    ])),
    telephone: new FormControl('', Validators.required),
    cni: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    imageFile: new FormControl('', Validators.required)
  })

  account_validation_messages = {
    'raisonSociale': [
      { type: 'required', message: 'raison Sociale obligatoire' },
      { type: 'minlength', message: 'raison Sociale doit avoir au moins 2 caracteres' },
    ],
    'email': [
      { type: 'required', message: 'le mail est obligatoire' },
      { type: 'pattern', message: 'entrer un mail valide' }
    ],
    'ninea': [
      { type: 'required', message: 'le ninea est obligatoire' },
      { type: 'minlength', message: 'le ninea doit avoir au moins 5 caracteres' },
    ],
    'telephone': [
      { type: 'required', message: 'le telephone est requis' },
    ],
    'cni': [
      { type: 'required', message: 'cni est requis' },
      { type: 'minlength', message: 'le numéro cni doit avoir 14 caractere' }
    ],
    'adresse': [
      { type: 'required', message: 'l adresse est obligatoire' }
    ],
    'description': [
      { type: 'required', message: 'raisonSociale is required' },
      { type: 'minlength', message: 'la description doit avoir au moins 5 caracteres' }
    ],
    'nom': [
      { type: 'required', message: 'le nom complet est obligatoire' },
      { type: 'minlength', message: 'le nom complet doit avoir au moins 2 caracteres' }
    ],
    'imageFile': [
      { type: 'required', message: 'image obligatoire' },
    ],
    'plainPassword': [
      { type: 'required', message: 'mot de passe obligatoire' },
      { type: 'minlength', message: 'le mot de passe doit contenir au moins 6 caracteres' }
    ]
    }

  ngOnInit() {
    
  }
  setUser(){
    
    this.userData=this.userForm.value
    this.userData.imageFile=this.fileToLoad
    console.log(this.userData.imageFile)
    console.log(this.userData)
    this.auth.setUser(this.userData)
      .subscribe(
        res=>{
          this.msg=res.status
        },
        err=>{
          this.errorMsg=err.error.error.exception[0].message
        }
      )
  }
  handleFileInput(file: FileList){
    this.fileToLoad=file.item(0)
    //afficher l image telechargée
    var reader = new FileReader()
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result 
    }
    reader.readAsDataURL(this.fileToLoad)
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
