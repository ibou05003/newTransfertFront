import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/interface/transaction';
import { User } from 'src/app/interface/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  public transaction=[]
  tay:Date=new Date()
  connecte:User
  afficheTransaction=true
  displayedColumnsEnv: string[] = ['code','montant', 'prenomEnv', 'nomEnv', 'telEnv','prenomBenef', 'nomBenef', 'telBenef','dateEnv','frais','commissionEnv', 'status'];
  displayedColumnsRet: string[] = ['code','montant', 'prenomEnv', 'nomEnv', 'telEnv','prenomBenef', 'nomBenef', 'telBenef','dateRet','frais','commissionRet', 'status'];
  dataSource1: MatTableDataSource<Transaction>;
  dataSource2: MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /**retrait */
  @ViewChild(MatPaginator, {static: true}) paginator1: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort1: MatSort;


  constructor(private transactionService: TransactionService,
              private auth: AuthService) { }

  periodeForm=new FormGroup({
  debut: new FormControl('', Validators.required),
  fin: new FormControl('', Validators.required)
  })
  ngOnInit() {
  }
  recherchePeriode(data){
    if (data.debut>data.fin) {
      return Swal.fire({
        type: 'error',
        text: 'Date debut ne doit pas depasser date fin'
      })
    }else{
      if (data.debut>this.tay || data.fin>this.tay) {
        return Swal.fire({
          type: 'error',
          text: 'La période ne doit pas depasser la date actuelle'
        })
      }
    }
    console.log(data)
      this.transactionService.getAllTransactions(data)
      .subscribe(
        res=>{
          this.transaction=res
          console.log(res[0])
          console.log(res[1])
          this.afficheTransaction=false
          /**Tableau Envoi */
          this.dataSource1 = new MatTableDataSource(res[0]);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
          /**Tableau retrait */
          this.dataSource2 = new MatTableDataSource(res[1]);
          this.dataSource2.paginator = this.paginator1;
          this.dataSource2.sort = this.sort1;
          //setTimeout(() => this.dataSource1.paginator = this.paginator);
        },
        err=>{
          console.log(err)
        }
      )
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
  _setDataSource(indexNumber) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource1.paginator ? this.dataSource1.paginator = this.paginator : null;
          break;
        case 1:
          !this.dataSource2.paginator ? this.dataSource2.paginator = this.paginator1 : null;
      }
    });
  }

  /**USERS */
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
