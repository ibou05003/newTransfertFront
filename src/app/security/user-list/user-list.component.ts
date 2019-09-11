import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

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
    if(status=='Actif'){
      this.msg='Bloqué'
    }else{
      this.msg='Débloqué'
    }
    Swal.fire({
      title: 'Etes vous sure?',
      text: "l'utilisateur va etre " +this.msg+"!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui!',
      cancelButtonText: 'Annuler!'
    }).then((result) => {
      if (result.value) {
        this.auth.bloquer(id)
        .subscribe(
          res=>{
            console.log(res)
            
            Swal.fire({
              type: 'success',
              text: 'Utilisateur '+this.msg
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
    this.dialog.open(UserDetailsComponent,{data:user})
  }
  isAuthenticated(){
    return this.auth.isAuthenticated()
    }
  
    isSuperAdminWari(){
    return this.auth.isSuperAdminWari()
    }
    isAdminWari(){
    return this.auth.isAdminWari()
    }
    isCaissier(){
    return this.auth.isCaissier()
    }
    isSuperAdminPartenaire(){
    return this.auth.isSuperAdminPartenaire()
    }
    isAdminPartenaire(){
    return this.auth.isAdminPartenaire()
    }
    isUser(){
    return this.auth.isUser()
    }
}
