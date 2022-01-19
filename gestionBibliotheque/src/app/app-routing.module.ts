import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterBibliothequeComponent } from './components/ajouter-bibliotheque/ajouter-bibliotheque.component';
import { HomeComponent } from './components/home/home.component';
import { ListeBibliothequesComponent } from './components/liste-bibliotheques/liste-bibliotheques.component';
import { LivresComponent } from './components/livres/livres.component';
import { LoginComponent } from './components/login/login.component';
import { RechercheBibliothequeComponent } from './components/recherche-bibliotheque/recherche-bibliotheque.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"liste-bibliotheques",component:ListeBibliothequesComponent},
  {path:"ajouter-bibliotheque",component:AjouterBibliothequeComponent},
  {path:"rechercher-bibliotheque",component:RechercheBibliothequeComponent},
  {path:"livres",component:LivresComponent},
  {path:"connexion",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
