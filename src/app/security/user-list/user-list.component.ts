import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users=[]
  connecte:User
  displayedColumns: string[] = ['id', 'email', 'nomComplet', 'telephone', 'cni', 'adresse', 'status','action'];
  dataSource: MatTableDataSource<User>;
  dataSource1: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if(this.isAdminWari() || this.isSuperAdminWari()){
      this.auth.getUsersSysteme()
      .subscribe(
        data=>{
          this.users =data
          console.log(this.users)
          this.loadP1(data)
        }
      );
    }else{
      if(this.isAdminPartenaire() || this.isSuperAdminPartenaire()){
        this.auth.getConnecte()
          .subscribe(
            res=>{
              this.connecte=res
              this.auth.getUsersPart(this.connecte.partenaire)
                .subscribe(
                  data=>{
                    this.users =data
                    this.loadP(data)
                  }
                )
            }
          )
      }
    }
    
  }
  loadP(data){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadP1(data){
    this.dataSource1 = new MatTableDataSource(data);
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    if(this.isAdminPartenaire() || this.isSuperAdminPartenaire()){
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }else{
      this.dataSource1.filter = filterValue.trim().toLowerCase();

      if (this.dataSource1.paginator) {
        this.dataSource1.paginator.firstPage();
    }
    }
  }
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
