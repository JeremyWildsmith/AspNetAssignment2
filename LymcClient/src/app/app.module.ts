import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReservationsService } from './reservations.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './account.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { BoatService } from './boat.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'newReservation',
    component: NewReservationComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    PageNotFoundComponent,
    LoginComponent,
    NewReservationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [ReservationsService, AccountService, BoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
