import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/service/partenaire.service';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.css']
})
export class PartenaireListComponent implements OnInit {

  public partenaires=[]

  constructor(private partenaireService: PartenaireService) { }

  ngOnInit() {
    this.partenaireService.getPartenaires()
        .subscribe(
          data=>this.partenaires =data
        );
  }

}
