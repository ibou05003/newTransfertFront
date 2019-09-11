import { Component, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/interface/partenaire';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PartenaireService } from 'src/app/service/partenaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partenaire-ajout',
  templateUrl: './partenaire-ajout.component.html',
  styleUrls: ['./partenaire-ajout.component.css']
})
export class PartenaireAjoutComponent implements OnInit {

  myDate = new Date();
  partenaireData:Partenaire
  partenaire:Partenaire
  msg=''
  errorMsg=''
  contrat=false
  constructor(private fb: FormBuilder,
              private partenaireService: PartenaireService) {
               }

  imageUrl:string ="assets/defaut.png"
  fileToLoad: File=null

  partenaireForm=new FormGroup({
    raisonSociale: new FormControl('', Validators.compose([
      Validators.minLength(2),
      Validators.required
    ])),
    ninea: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    adresseSociale: new FormControl('', Validators.required),
    telephoneSiege: new FormControl('', Validators.required),
    description: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    nomCompletPersonneRef: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
    ])),
    emailPersonneRef: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    emailSiege: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    telephoneRef: new FormControl('', Validators.required),
    cniPersonneRef: new FormControl('', Validators.required),
    adressePersonneRef: new FormControl('', Validators.required),
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
    ]
    }

  ngOnInit() {
  }
  setPartenaire(){
    
    this.partenaireData=this.partenaireForm.value
    this.partenaireData.imageFile=this.fileToLoad
    console.log(this.partenaireData.imageFile)
    console.log(this.partenaireData)
    this.partenaireService.setPartenaire(this.partenaireData)
      .subscribe(
        res=>{
          //this.msg=res.status
          console.log(res)
          this.partenaire=res
          Swal.fire({
            type: 'success',
            text: 'Partenaire Inscris avec succes'
          })
          this.contrat=true
          setTimeout(()=>{
            window.print();
          },3000)

        },
        err=>{
          this.errorMsg=err.error.message
          Swal.fire({
            type: 'error',
            text: this.errorMsg
          })
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
}
