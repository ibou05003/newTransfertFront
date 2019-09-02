import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from 'src/app/interface/transaction';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {


  envoiData:Transaction
  msg=''
  errorMsg=''
  selected='cni'
  
  constructor(private fb: FormBuilder,
              private transactionService: TransactionService) { }

  imageUrl:string ="assets/defaut.png"
  fileToLoad: File=null

  envoiForm=new FormGroup({
    prenomEnv: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    nomEnv: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    telEnv: new FormControl('', Validators.required),
    montant: new FormControl('', Validators.required),
    adresseEnv: new FormControl('', Validators.required),
    typePieceEnv: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    cniEnv: new FormControl('', Validators.required),
    prenomBenef: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    nomBenef: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    telBenef: new FormControl('', Validators.required),
    typePieceBenef: new FormControl('',Validators.required)
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
    ]
    }

  ngOnInit() {
  }
  setEnvoi(){
    
    this.envoiData=this.envoiForm.value
    console.log(this.envoiData)
    this.transactionService.setEnvoi(this.envoiData)
      .subscribe(
        res=>{
          this.msg=res.status
        },
        err=>{
          this.errorMsg=err.error.message
            console.log(err)
        }
      )
  }
}
