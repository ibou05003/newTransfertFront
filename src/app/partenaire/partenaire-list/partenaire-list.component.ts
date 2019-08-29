import { Component, OnInit, ViewChild } from '@angular/core';
import { PartenaireService } from 'src/app/service/partenaire.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Partenaire } from 'src/app/interface/partenaire';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.css']
})
export class PartenaireListComponent implements OnInit {

  public partenaires=[]
  displayedColumns: string[] = ['id', 'raisonSociale', 'ninea', 'adresseSociale', 'telephoneSiege', 'emailSiege', 'description', 'status','action'];
  dataSource: MatTableDataSource<Partenaire>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private partenaireService: PartenaireService) { }

  ngOnInit() {
    this.partenaireService.getPartenaires()
        .subscribe(
          data=>{
            this.partenaires =data
            this.loadP(data)
          }
        );
  }
  loadP(data){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
