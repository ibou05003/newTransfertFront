import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartenaireAjoutComponent } from './partenaire/partenaire-ajout/partenaire-ajout.component';
import { UserComponent } from './security/user/user.component';
import { LoginComponent } from './security/login/login.component';
import { PartenaireListComponent } from './partenaire/partenaire-list/partenaire-list.component';
import { PartenaireDetailsComponent } from './partenaire/partenaire-details/partenaire-details.component';
import { EnvoiComponent } from './transaction/envoi/envoi.component';
import { RetraitComponent } from './transaction/retrait/retrait.component';
import { ListComponent } from './transaction/list/list.component';
import { CompteAjoutComponent } from './compte/compte-ajout/compte-ajout.component';
import { CompteListComponent } from './compte/compte-list/compte-list.component';
import { VersementAjoutComponent } from './versement/versement-ajout/versement-ajout.component';
import { VersementListComponent } from './versement/versement-list/versement-list.component';
import { VersementListParCompteComponent } from './versement/versement-list-par-compte/versement-list-par-compte.component';
import { CompteListParPartenaireComponent } from './compte/compte-list-par-partenaire/compte-list-par-partenaire.component';
import { UsersListParCompteComponent } from './compte/users-list-par-compte/users-list-par-compte.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { PartenaireService } from './service/partenaire.service';
import { UpdatePasswordComponent } from './security/update-password/update-password.component';
import { UserListComponent } from './security/user-list/user-list.component';
import { UserListSystemeComponent } from './security/user-list-systeme/user-list-systeme.component'
import { CompteService } from './service/compte.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AffectationComponent } from './compte/affectation/affectation.component';
import { ListUserAffectationComponent } from './compte/list-user-affectation/list-user-affectation.component';
import { ProfilComponent } from './profil/profil.component';
import { ListAllComponent } from './transaction/list-all/list-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PartenaireAjoutComponent,
    UserComponent,
    LoginComponent,
    PartenaireListComponent,
    PartenaireDetailsComponent,
    EnvoiComponent,
    RetraitComponent,
    ListComponent,
    CompteAjoutComponent,
    CompteListComponent,
    VersementAjoutComponent,
    VersementListComponent,
    VersementListParCompteComponent,
    CompteListParPartenaireComponent,
    UsersListParCompteComponent,
    PageNotFoundComponent,
    UpdatePasswordComponent,
    UserListComponent,
    UserListSystemeComponent,
    UserDetailsComponent,
    AffectationComponent,
    ListUserAffectationComponent,
    ProfilComponent,
    ListAllComponent
  ],
  entryComponents:[
    UserDetailsComponent,
    PartenaireDetailsComponent,
    AffectationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, CompteService,PartenaireService,AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
