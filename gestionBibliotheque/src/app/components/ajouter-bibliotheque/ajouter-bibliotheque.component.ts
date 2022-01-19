import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BibliothequesService } from 'src/app/services/bibliotheques.service';
import { ListeBibliothequesComponent } from '../liste-bibliotheques/liste-bibliotheques.component';


@Component({
  selector: 'app-ajouter-bibliotheque',
  templateUrl: './ajouter-bibliotheque.component.html',
  styleUrls: ['./ajouter-bibliotheque.component.css']
})
export class AjouterBibliothequeComponent implements OnInit {

  constructor(private bService: BibliothequesService, private comp: ListeBibliothequesComponent) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let bibliotheque = form.value;
    this.bService.postBibliotheque(bibliotheque).subscribe(response => {
      this.comp.afficheBibliotheques();
    });

  }
}
