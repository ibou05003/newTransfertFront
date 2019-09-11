import { Component, OnInit, ViewChild } from '@angular/core';
import { PartenaireService } from 'src/app/service/partenaire.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Partenaire } from 'src/app/interface/partenaire';
import { PartenaireDetailsComponent } from '../partenaire-details/partenaire-details.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.css']
})
export class PartenaireListComponent implements OnInit {

  public partenaires=[]
  displayedColumns: string[] = ['id', 'raisonSociale', 'ninea', 'adresseSociale', 'telephoneSiege', 'emailSiege', 'status','action'];
  dataSource: MatTableDataSource<Partenaire>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  msg=''

  constructor(private partenaireService: PartenaireService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    this.partenaireService.getPartenaires()
        .subscribe(
          data=>{
            this.partenaires =data
            this.loadP(data)
          }
        );
  }
  onSelect(partenaire){
    //this.router.navigate(['/users',user.id])
    console.log(partenaire)
    this.dialog.open(PartenaireDetailsComponent,{data:partenaire})
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
  bloquer(id,status){
    if(status=='Actif'){
      this.msg='Bloqué'
    }else{
      this.msg='Débloqué'
    }
    Swal.fire({
      title: 'Etes vous sure?',
      text: "le partenaire va etre " +this.msg+"!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!',
      cancelButtonText: 'Annuler!'
    }).then((result) => {
      if (result.value) {
        this.partenaireService.bloquer(id)
        .subscribe(
          res=>{
            console.log(res)
            
            Swal.fire({
              type: 'success',
              text: 'Partenaire '+this.msg
            })
            this.ngOnInit();
          },
          err=>{
            this.msg=err.error.error.exception[0].message
            Swal.fire({
              type: 'error',
              text: this.msg
            })
          }
        )
        
      }
    })
  }
  detail(id){
    this.router.navigate(['/transactions',id])
  }
}
