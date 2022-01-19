import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor(private http: HttpClient) { }

  getAllLivres() {
    return this.http.get('http://localhost:8088/allLivres');
  }

  getLivresByBiblio(elt: any) {
    return this.http.get('http://localhost:8088/livresParBibliotheque/' + elt.id);
  }

  getLivresParQuantite(min: any, max: any) {

    return this.http.get('http://localhost:8088/cherchesLivresEntre/' + min + ',' + max);
  }
}
