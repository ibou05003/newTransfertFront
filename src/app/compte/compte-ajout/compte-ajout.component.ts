import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PartenaireService } from 'src/app/service/partenaire.service';
import { Partenaire } from 'src/app/interface/partenaire';
import { CompteService } from 'src/app/service/compte.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-compte-ajout',
  templateUrl: './compte-ajout.component.html',
  styleUrls: ['./compte-ajout.component.css']
})
export class CompteAjoutComponent implements OnInit {

  //Swal:any
  errorMsg=''
  partenaire:Partenaire
  partAffiche=false
  constructor(private partenaireService: PartenaireService,
              private compteService: CompteService,
              private router: Router) { }
  partForm=new FormGroup({
    ninea: new FormControl('', Validators.required)
    })

    ajoutCompteForm=new FormGroup({
      id: new FormControl('')
      })
    
  account_validation_messages = {
    'ninea': [
      { type: 'required', message: 'ninea requis' },
    ]
    }
  ngOnInit() {
  }
  recherchePart(data){
    this.partenaireService.recherchePartenaire(data)
      .subscribe(
        res=>{
          console.log(res)
          this.partenaire=res
          this.partAffiche=true
        },
        err=>{
          console.log(err)
          this.errorMsg=err.error.error.exception[0].message
          Swal.fire({
            type: 'error',
            text: this.errorMsg
          })
        }
      )
  }
  ajoutCompte(id){
    console.log(id)
    this.compteService.setNewCompte(id)
      .subscribe(
        res=>{
          console.log(res)
          this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
          this.router.navigate(["/compte/ajout"]));
          Swal.fire({
            type: 'success',
            text: 'Compte Ajouté avec succès!',
          })
        },
        err=>{
          console.log(err)
        }
      )
  }
}
