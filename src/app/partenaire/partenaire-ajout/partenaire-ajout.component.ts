import { Component, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/interface/partenaire';
import { FormBuilder, FormControl } from '@angular/forms';
import { PartenaireService } from 'src/app/service/partenaire.service';

@Component({
  selector: 'app-partenaire-ajout',
  templateUrl: './partenaire-ajout.component.html',
  styleUrls: ['./partenaire-ajout.component.css']
})
export class PartenaireAjoutComponent implements OnInit {

  //partenaireData:Partenaire
  
  
  constructor(private fb: FormBuilder,
              private partenaireService: PartenaireService) { }

  partenaireForm=this.fb.group({
    raisonSociale: new FormControl(),
    ninea: new FormControl(),
    adresseSociale: new FormControl(),
    telephoneSiege: new FormControl(),
    description: new FormControl(),
    nomCompletPersonneRef: new FormControl(),
    emailPersonneRef: new FormControl(),
    emailSiege: new FormControl(),
    telephoneRef: new FormControl(),
    cniPersonneRef: new FormControl(),
    adressePersonneRef: new FormControl(),
    imageFile: new FormControl()
  })

  ngOnInit() {
  }
  setPartenaire(){
    this.partenaireService.setPartenaire(this.partenaireForm.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
