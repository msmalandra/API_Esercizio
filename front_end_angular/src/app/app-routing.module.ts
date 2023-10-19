import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RistoranteListaComponent } from './ristorante-lista/ristorante-lista.component';
import { RistoranteInserisciComponent } from './ristorante-inserisci/ristorante-inserisci.component';
import { RistoranteDettaglioComponent } from './ristorante-dettaglio/ristorante-dettaglio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "ristorante/lista",
    component: RistoranteListaComponent
  },
  {
    path: "ristorante",
    redirectTo: "ristorante/lista"
  },
  {
    path: "ristorante/dettaglio/:ristoranteId",
    component: RistoranteDettaglioComponent
  },
  {
    path: "ristorante/nuovo",
    component: RistoranteInserisciComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
