import { Component } from '@angular/core';
import { LoginservService } from '../loginserv.service';
import { Router } from '@angular/router';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  varEmail: string = "";
  varPassword: string = "";

  constructor(private service: LoginservService, private router: Router) {

  }

  insertLogin() {

    let rist: Login = new Login();
    rist.email = this.varEmail;
    rist.password = this.varPassword;


    this.service.accessaLogin(rist, rist.email!, rist.password!).subscribe(
      (risultato) => {
        if (risultato.status === "success") {
          alert("Sei connesso");
          window.sessionStorage.setItem('email', this.varEmail);
          window.sessionStorage.setItem('password', this.varPassword);
          this.router.navigateByUrl("ristorante/lista");
        } else {
          alert("Errore");
        }
      },
      (error) => {
        alert("Errore nella richiesta");
      }
    )
  }
}
