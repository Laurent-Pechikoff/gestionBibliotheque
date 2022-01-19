import { Component } from '@angular/core';
import { RechercheBibliothequeComponent } from './components/recherche-bibliotheque/recherche-bibliotheque.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionBibliotheque';
  rechercheB: any;
  mot: any;

  constructor() { }


  rechercheBiblio(recherche: any) {
    localStorage.clear();
    let mot = localStorage.setItem('motRecherche', recherche.form.value.search);
    console.log(localStorage.getItem('motRecherche'));
    //this.recherBibi.rechercheBiblio2(mot);
  }


}
