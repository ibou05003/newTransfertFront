import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from 'src/app/interface/transaction';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public transaction=[]
  connecte:User
  part:number
  id:number
  tay:Date=new Date()
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
              private auth: AuthService,
              private route: ActivatedRoute) { }

  periodeForm=new FormGroup({
  debut: new FormControl('', Validators.required),
  fin: new FormControl('', Validators.required)
  })
  ngOnInit() {
    this.part=this.route.snapshot.params['id'];
    this.auth.getConnecte()
      .subscribe(
        res=>{
          this.connecte=res
        },
        err=>{
          console.log(err)
        }
      )
  }
  recherchePeriode(data){
    console.log(data)
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
    if (this.part) {
      this.id=this.part
    }else{
      this.id=this.connecte.partenaire.id
    }console.log(this.id)
      this.transactionService.getTransactionsPart(data,this.id)
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
