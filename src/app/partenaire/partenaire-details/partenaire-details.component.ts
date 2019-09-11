import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Partenaire } from 'src/app/interface/partenaire';

@Component({
  selector: 'app-partenaire-details',
  templateUrl: './partenaire-details.component.html',
  styleUrls: ['./partenaire-details.component.css']
})
export class PartenaireDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Partenaire) { }

  ngOnInit() {
  }

}
