import { Component, OnInit } from '@angular/core';
import { BibliothequesService } from 'src/app/services/bibliotheques.service';

@Component({
  selector: 'app-liste-bibliotheques',
  templateUrl: './liste-bibliotheques.component.html',
  styleUrls: ['./liste-bibliotheques.component.css']
})
export class ListeBibliothequesComponent implements OnInit {

  listeBibliotheque: any;
  afficherAjout = false;
  afficherModif = false;
  bibliotheque = {
    "id": "",
    "nom": "",
    "description": "",
    "photo": ""
  }
  constructor(private bService: BibliothequesService) { }

  ngOnInit(): void {
    this.afficheBibliotheques();
  }
  afficheFormAjout() {
    this.afficherAjout = !this.afficherAjout;
  }

  afficheBibliotheques() {
    this.bService.getBibliotheque().subscribe(data => {
      this.listeBibliotheque = data;
      console.log(this.listeBibliotheque);
    })
  }
  suprimerBibliotheque(bibliotheque: any) {
    this.bService.deleteBibliotheque(bibliotheque).subscribe(response => {
      this.afficheBibliotheques();
    });
  }

  modifRecup(bibliotheque: any) {
    this.bibliotheque = bibliotheque;
    if (this.afficherModif != true) {
      this.afficherModif = true;
    }
  }

  modifierBibliotheque() {
    this.bService.updateBiblioteque(this.bibliotheque).subscribe(response => {
      this.afficheBibliotheques();
    });
  }
  cacherModif() {
    this.afficherModif = false;
  }
}
