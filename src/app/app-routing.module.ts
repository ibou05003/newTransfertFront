import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './security/user/user.component';
import { CompteAjoutComponent } from './compte/compte-ajout/compte-ajout.component';
import { PartenaireAjoutComponent } from './partenaire/partenaire-ajout/partenaire-ajout.component';
import { PartenaireListComponent } from './partenaire/partenaire-list/partenaire-list.component';
import { CompteListComponent } from './compte/compte-list/compte-list.component';
import { VersementAjoutComponent } from './versement/versement-ajout/versement-ajout.component';
import { VersementListComponent } from './versement/versement-list/versement-list.component';


const routes: Routes = [
  {
    path: '' , redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard' , component: DashboardComponent
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'register' , component: UserComponent
  },
  {
    path: 'compte/ajout' , component: CompteAjoutComponent
  },
  {
    path: 'partenaire/ajout' , component: PartenaireAjoutComponent
  },
  {
    path: 'partenaire/list' , component: PartenaireListComponent
  },
  {
    path: 'compte/list' , component: CompteListComponent
  },
  {
    path: 'versement/ajout' , component: VersementAjoutComponent
  },
  {
    path: 'versement/list' , component: VersementListComponent
  },
  {
    path: "**" , component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
