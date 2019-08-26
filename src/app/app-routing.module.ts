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
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '' , redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: 'register' , component: UserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'compte/ajout' , component: CompteAjoutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'partenaire/ajout' , component: PartenaireAjoutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'partenaire/list' , component: PartenaireListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'compte/list' , component: CompteListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'versement/ajout' , component: VersementAjoutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'versement/list' , component: VersementListComponent, canActivate: [AuthGuard]
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
