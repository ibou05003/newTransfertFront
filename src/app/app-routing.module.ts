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
import { UpdatePasswordComponent } from './security/update-password/update-password.component';
import { UserListComponent } from './security/user-list/user-list.component';
import { UserListSystemeComponent } from './security/user-list-systeme/user-list-systeme.component';
import { EnvoiComponent } from './transaction/envoi/envoi.component';
import { RetraitComponent } from './transaction/retrait/retrait.component';


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
    path: 'updatepassword' , component: UpdatePasswordComponent,canActivate: [AuthGuard]
  },
  {
    path: 'register' , component: UserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'users' , component: UserListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'usersyteme' , component: UserListSystemeComponent, canActivate: [AuthGuard]
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
    path: 'envoi' , component: EnvoiComponent, canActivate: [AuthGuard]
  },
  {
    path: 'retrait' , component: RetraitComponent, canActivate: [AuthGuard]
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
