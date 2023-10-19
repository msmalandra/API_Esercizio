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
  varEmail: string | undefined;
  varPassword: string | undefined;

  constructor(private service: LoginservService, private router: Router) {

  }

  insertLogin() {

    let rist: Login = new Login();
    rist.email = this.varEmail;
    rist.password = this.varPassword;


    this.service.accessaLogin(rist).subscribe(
      (risultato) => {
        if (risultato.status == 'success') {
          alert("Sei connesso")

          this.router.navigateByUrl("ristorante/lista")
        }
        else
          alert("Errore")
      },

      (errore) => {
        console.log(errore)
      }
    )
  }
}
