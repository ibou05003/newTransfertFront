import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/service/transaction.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/interface/transaction';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  retraitData:Transaction
  transaction:Transaction
  msg=''
  errorMsg=''
  selected='cni'
  code=''
  trans=false

  constructor(private transactionService: TransactionService,
              private router: Router) { }

  retraitForm=new FormGroup({
    typePieceBenef: new FormControl('', Validators.required),
    cniBenef: new FormControl('', Validators.compose([
      Validators.minLength(14),
      Validators.required
    ]))
    })
    codeForm=new FormGroup({
      code: new FormControl('', Validators.required),
      typeRetrait: new FormControl('', Validators.required)
      })

  account_validation_messages = {
    'cni': [
      { type: 'required', message: 'cni est requis' },
      { type: 'minlength', message: 'le numéro cni doit avoir 14 caractere' }
    ],
    'code': [
      { type: 'required', message: 'code de retrait requis' },
    ]
    }

  ngOnInit() {
  }
  setRetrait(){
    
    this.retraitData=this.retraitForm.value
    console.log(this.retraitData)
    let retrait= this.transaction['code'];
    this.retraitData.typeRetrait=this.codeForm.get('typeRetrait').value
    console.log(retrait)
    this.transactionService.setRetrait(this.retraitData,retrait)
      .subscribe(
        res=>{
          this.msg=res.status
          console.log(res)
        },
        err=>{
          this.errorMsg=err.error.message
            console.log(err)
        }
      )
  }
  rechercheCode(){
    this.transactionService.getCode(this.codeForm.value)
      .subscribe(
        res=>{
          this.transaction=res
          this.trans=true
          console.log(this.transaction)
        },
        err=>{
          this.errorMsg=err.error.error.exception[0].message
            console.log(err)
        }
      )
  }

}
