import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CompteService } from 'src/app/service/compte.service';
import { Compte } from 'src/app/interface/compte';

@Component({
  selector: 'app-versement-ajout',
  templateUrl: './versement-ajout.component.html',
  styleUrls: ['./versement-ajout.component.css']
})
export class VersementAjoutComponent implements OnInit {

  public compteV:Compte
  public versements=[]
  public affiche=false
  constructor(private compteService: CompteService) { }

  compteForm=new FormGroup({
    compte: new FormControl('', Validators.compose([
      Validators.minLength(17),
      Validators.maxLength(17),
      Validators.required
    ]))
  })
  depotForm=new FormGroup({
    montant: new FormControl('', Validators.required)
  })
  account_validation_messages = {
    'compte': [
      { type: 'required', message: 'Entrer un numero de compte' },
      { type: 'minlength', message: 'Le numero de compte doit avoir 14 caracteres' },
      { type: 'maxlength', message: 'Le numero de compte doit avoir 14 caracteres' },
    ],
    'montant': [
      { type: 'required', message: 'Username is required' },
    ]
    }
  ngOnInit() {
  }
  rechercheCompte(){
    this.compteService.rechercheCompte(this.compteForm.value)
      .subscribe(
          res=>{
            this.compteV=res
            this.compteService.getVersementByCompte(this.compteV)
              .subscribe(
                data=>{
                  this.versements=data
                  console.log(data)
                }
              )
            this.affiche=true
          },
          err=>{
            console.log(err)
          }
      )
  }
  versement(){
    this.compteService.versement(this.depotForm.value,this.compteV)
    .subscribe(
        res=>{
          console.log(res)
          //this.compteV=res
          //console.log(this.compteV.partenaire)
          //this.affiche=true
        },
        err=>{
          console.log(err)
        }
    )
  }
}
