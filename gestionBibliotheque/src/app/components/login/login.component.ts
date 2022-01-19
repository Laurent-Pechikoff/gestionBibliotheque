import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any
  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
  }
  verifLogin(form: any) {
    console.log(form.value)
    this.login = this.authService.verifUser(form.form.value)
    alert(this.login)
  }
}
