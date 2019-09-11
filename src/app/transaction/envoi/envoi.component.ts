import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from 'src/app/interface/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { Router } from '@angular/router';
import { Tarif } from 'src/app/interface/tarif';
import { MatSnackBar } from '@angular/material';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {


  envoiData:Transaction
  transaction:Transaction
  msg=''
  errorMsg=''
  selected='cni'
  tarif:Tarif[]
  recu=false
  //Swal:any
  

  constructor(private transactionService: TransactionService,
              private router: Router,
              private _snackBar: MatSnackBar) { }

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
    montant: new FormControl('', Validators.compose([
      Validators.min(500),
      Validators.max(3000000),
      Validators.required
    ])),
    adresseEnv: new FormControl('', Validators.required),
    typePieceEnv: new FormControl('', Validators.required),
    prenomBenef: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    cniEnv: new FormControl('', Validators.compose([
      Validators.minLength(14),
      Validators.required
    ])),
    nomBenef: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    telBenef: new FormControl('', Validators.required),
    })

  account_validation_messages = {
    'prenomEnv': [
      { type: 'required', message: 'prenom requis' },
      { type: 'minlength', message: 'le prenom doit avoir au moins 2 caracteres' },
    ],
    'email': [
      { type: 'required', message: 'le mail est obligatoire' },
      { type: 'pattern', message: 'entrer un mail valide' }
    ],
    'nomEnv': [
      { type: 'required', message: 'le nom est obligatoire' },
      { type: 'minlength', message: 'le nom doit avoir au moins 2 caracteres' },
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
    'montant': [
      { type: 'required', message: 'montant obligatoire' },
      { type: 'min', message: 'montant doit etre superieur a 500' },
      { type: 'max', message: 'montant doit etre inferieur a 3 000 000' }
    ],
    'nom': [
      { type: 'required', message: 'le nom complet est obligatoire' },
      { type: 'minlength', message: 'le nom complet doit avoir au moins 2 caracteres' }
    ]
    }

  ngOnInit() {
  }
  setEnvoi(){
    //let Swal:any
    this.envoiData=this.envoiForm.value
    console.log(this.envoiData)
    this.transactionService.setEnvoi(this.envoiData)
      .subscribe(
        res=>{
          //this.msg=res.status
          // this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
          // this.router.navigate(["/envoi"]));
          // this._snackBar.open(this.msg, 'Dismiss', {
          //   duration: 5000,
          // }) 
          Swal.fire({
            type: 'success',
            text: 'Envoi effectué avec success'
          })
          console.log(res)
          this.transaction=res
          this.recu=true
          setTimeout(()=>{
            window.print();
          },3000)

          // this.envoiForm.reset();
        },
        err=>{
          this.errorMsg=err.error.message
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: this.errorMsg
          })
            console.log(err)
        }
      )
  }
  getFrais(montant){
    montant=this.envoiForm.get('montant').value
    //console.log(montant)
      this.transactionService.getFrais(montant)
        .subscribe(
          data=>{
            this.tarif=data
            console.log(this.tarif)
          },
          err=>{
            console.log(err)
          }
        )
  }
}
