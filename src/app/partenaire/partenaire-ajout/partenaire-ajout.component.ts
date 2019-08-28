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

  partenaireData:Partenaire
  
  
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
    // this.partenaireData.raisonSociale=this.partenaireForm.get('raisonSociale').value
    // this.partenaireData.ninea=this.partenaireForm.get('ninea').value
    // this.partenaireData.adresseSociale=this.partenaireForm.get('adresseSociale').value
    // this.partenaireData.telephoneSiege=this.partenaireForm.get('telephoneSiege').value
    // this.partenaireData.description=this.partenaireForm.get('description').value
    // this.partenaireData.nomCompletPersonneRef=this.partenaireForm.get('nomCompletPersonneRef').value
    // this.partenaireData.emailPersonneRef=this.partenaireForm.get('emailPersonneRef').value
    // this.partenaireData.emailSiege=this.partenaireForm.get('emailSiege').value
    // this.partenaireData.telephoneRef=this.partenaireForm.get('telephoneRef').value
    // this.partenaireData.cniPersonneRef=this.partenaireForm.get('cniPersonneRef').value
    // this.partenaireData.adressePersonneRef=this.partenaireForm.get('adressePersonneRef').value
    // this.partenaireData.imageFile=this.partenaireForm.get('imageFile').value
    this.partenaireService.setPartenaire(this.partenaireForm.value)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
