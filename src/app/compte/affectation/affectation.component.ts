import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/interface/user';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CompteService } from 'src/app/service/compte.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {

  comptess=[]

  constructor(@Inject(MAT_DIALOG_DATA) public data:User,
              private compteService: CompteService,
              private router: Router) { }

  affectForm=new FormGroup(
    {
      compte: new FormControl()
    }
  )

  ngOnInit() {
    this.compteService.getComptes(this.data.partenaire)
      .subscribe(
        res=>{
          this.comptess=res
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      )
  }
  affecter(){
    this.compteService.affectComptes(this.data,this.affectForm.value)
      .subscribe(
        res=>{
          console.log(res)
          Swal.fire({
            type: 'success',
            text: 'Affectation Reussi'
          })
          this.router.navigate(['/compte/liste/assign'])
        },
        err=>{
          console.log(err)
        }
      )
  }

}
