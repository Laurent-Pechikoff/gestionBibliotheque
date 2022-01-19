import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
Users = [
  {prenom:"",motDePass:""},
  {prenom:"",motDePass:""},
  {prenom:"",motDePass:""}
]
  constructor() { }
}
