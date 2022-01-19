import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BibliothequesService } from 'src/app/services/bibliotheques.service';

@Component({
  selector: 'app-recherche-bibliotheque',
  templateUrl: './recherche-bibliotheque.component.html',
  styleUrls: ['./recherche-bibliotheque.component.css']
})
export class RechercheBibliothequeComponent implements OnInit {
  listeBibliotheque: any;

  constructor(private app: AppComponent, private bService: BibliothequesService) { }
  listeRecherche: any;
  motRecherche: any;
  ngOnInit(): void {

    console.log(localStorage.getItem('motRecherche'));
    this.rechercheBiblio2(localStorage.getItem('motRecherche'));
  }
  rechercheBiblio2(recherche: any) {
    //this.ngOnInit();
    console.log(recherche);
    this.bService.searchBibliotheque(recherche).subscribe(response => {
      this.listeRecherche = response;
      console.log(this.listeRecherche);
      this.motRecherche = recherche;
      
    })
  }
  

}
