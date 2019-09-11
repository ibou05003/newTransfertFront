import { Component, OnInit, ViewChild } from '@angular/core';
import { AffectationComponent } from '../affectation/affectation.component';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-list-user-affectation',
  templateUrl: './list-user-affectation.component.html',
  styleUrls: ['./list-user-affectation.component.css']
})
export class ListUserAffectationComponent implements OnInit {

  public users=[]
  connecte:User
  msg=''
  displayedColumns: string[] = ['id', 'email','roles', 'nomComplet', 'telephone', 'cni', 'adresse', 'status','action'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private auth: AuthService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.auth.getUsers()
      .subscribe(
        res=>{
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err=>{
          console.log(err)
        }
      )
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
    this.auth.bloquer(id)
      .subscribe(
        res=>{
          console.log(res)
          if(status=='Actif'){
            this.msg='Utilisateur Bloqué'
          }else{
            this.msg='Utilisateur Débloqué'
          }
          Swal.fire({
            type: 'success',
            text: this.msg
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
  /**Gestion role */
  fonction(roles){
    let fonc;
    if(roles[0]=='ROLE_SuperAdminPartenaire' || roles[0]=='ROLE_AdminPartenaire' || roles[0]=='ROLE_AdminWari' || roles[0]=='ROLE_SuperAdminWari'){
      fonc='Administrateur';
    }
    else if(roles[0]=='ROLE_Caissier'){
      fonc='Caissier';
    }
    else if(roles[0]=='ROLE_UserSimple'){
      fonc='Utilisateur';
    }
    return fonc;
  }
  /** Affiche detail */
  onSelect(user){
    //this.router.navigate(['/users',user.id])
    console.log(user)
    this.dialog.open(AffectationComponent,{data:user})
  }
}
