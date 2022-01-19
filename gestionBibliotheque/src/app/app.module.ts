import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeBibliothequesComponent } from './components/liste-bibliotheques/liste-bibliotheques.component';
import { AjouterBibliothequeComponent } from './components/ajouter-bibliotheque/ajouter-bibliotheque.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RechercheBibliothequeComponent } from './components/recherche-bibliotheque/recherche-bibliotheque.component';
import { LivresComponent } from './components/livres/livres.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeBibliothequesComponent,
    AjouterBibliothequeComponent,
    HomeComponent,
    RechercheBibliothequeComponent,
    LivresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
