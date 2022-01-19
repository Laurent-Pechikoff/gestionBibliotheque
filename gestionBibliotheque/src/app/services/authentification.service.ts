import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  message: any
  trouve:boolean=false;
  Users = [

    { prenom: "patrick", motDePass: "123", roles: ["user"] },
    { prenom: "toto", motDePass: "toto", roles: ["user"] },
    { prenom: "Laurent", motDePass: "bla123", roles: ["user", "admin"] }
  ]
  constructor() { }

  verifUser(user: any) {

    this.Users.forEach(element => {
      if (user.prenom == element.prenom) {
        if (user.motDePass == element.motDePass) {
          this.message = "connecté en tant que : " + element.roles
          
        }
        else {
          this.message = "mauvais mot de pass"
        }
      }
      else {
        this.message = "utilisateur inconnu"
      }

    });
    console.log(this.message)
    return this.message
  }

trouveUser(user:any){
while(!this.trouve){
  this.Users.forEach(element => {
    if (user.prenom == element.prenom) {
      if (user.motDePass == element.motDePass) {
        this.message = "connecté en tant que : " + element.roles
        this.trouve=true
      }
      else {
        this.message = "mauvais mot de pass"
        this.trouve=true
      }
    }
    else {
      this.message = "utilisateur inconnu"
    }

  });
  console.log(this.message)
  return this.message
}
}

}
