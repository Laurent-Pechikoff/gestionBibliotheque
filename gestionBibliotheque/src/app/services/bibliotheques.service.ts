import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BibliothequesService {
  url = ('http://localhost:8088/bibliotheques');
  constructor(private http: HttpClient) { }

  getBibliotheque() {
    return this.http.get('http://localhost:8088/getbibliotheques');
  }

  postBibliotheque(bibliotheque: any) {
    return this.http.post('http://localhost:8088/savebibliotheques', bibliotheque);
  }
  deleteBibliotheque(bibliotheque: any) {
    return this.http.delete('http://localhost:8088/delBibliotheques' + "/" + bibliotheque.id);
  }

  updateBiblioteque(bibliotheque: any) {
    return this.http.put('http://localhost:8088/putBibliotheques' + "/" + bibliotheque.id, bibliotheque);
  }

  searchBibliotheque(recherche: any) {
    // return this.http.get('http://localhost:8088/bibliotheques/search/byName?name=' + recherche);
    return this.http.get('http://localhost:8088/rechercheBiblio/' + recherche);
  }
}
