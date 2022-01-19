import { Component, OnInit } from '@angular/core';
import { BibliothequesService } from 'src/app/services/bibliotheques.service';
import { LivresService } from 'src/app/services/livres.service';
import { ListeBibliothequesComponent } from '../liste-bibliotheques/liste-bibliotheques.component';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  constructor(private livreService: LivresService, private bService: BibliothequesService) { }
  listeLivres: any;
  listeBibliotheque: any;
  status: any;
  ngOnInit(): void {
    this.affichesLivres();
    this.afficheBibliotheques();
  }
  affichesLivres() {
    this.livreService.getAllLivres().subscribe(data => {
      this.listeLivres = data
      console.log(this.listeLivres);
    })

  }
  afficheBibliotheques() {
    this.bService.getBibliotheque().subscribe(data => {
      this.listeBibliotheque = data;
    })
  }
  afficheLivreParBiblio(elt: any) {
    this.status = elt.id;
    // this.changeBackground(elt);
    this.livreService.getLivresByBiblio(elt).subscribe(data => {
      this.listeLivres = data;
      console.log(this.listeLivres);
    })
  }
  changeBackground(elt: any) {
    let test = document.getElementsByName('li');


    let div = document.getElementById(elt.id)?.classList.add('bg-danger');
  }

  afficheLivreParQuantite(ngForm: any) {
    let value = ngForm.value;
    console.log(ngForm);
    console.log(value.minQuantite);
    this.livreService.getLivresParQuantite(value.minQuantite,value.maxQuantite).subscribe(data => {
      this.listeLivres = data;
      console.log(this.listeLivres);
      
    })
  }
}
