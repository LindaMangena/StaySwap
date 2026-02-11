import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ListingDetailsComponent } from './pages/listing-details/listing-details.component';
import { ListYourApartmentComponent } from './pages/list-your-apartment/list-your-apartment.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrowseComponent,
    LoginComponent,
    SignupComponent,
    ListingDetailsComponent,
    ListYourApartmentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
