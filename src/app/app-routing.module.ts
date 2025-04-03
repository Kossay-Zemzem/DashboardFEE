import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { MembresPageComponent } from './layout/membres-page/membres-page.component';
import { TachePageComponent } from './layout/tache-page/tache-page.component';
import { DemandePageComponent } from './layout/demande-page/demande-page.component';
import { AuthPageComponent } from './layout/auth-page/auth-page.component';
import { TacheComitePageComponent } from './layout/tache-comite-page/tache-comite-page.component';


const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthPageComponent },
  { path: "membres", component: MembresPageComponent },
  { path: "taches", component: TachePageComponent },
  { path: "demande", component: DemandePageComponent },
  { path: "tachesComite", component: TacheComitePageComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exporting the list of pages instead of each page separately
export const listPages = [PageNotFoundComponent, AuthPageComponent, MembresPageComponent, TachePageComponent, DemandePageComponent, TacheComitePageComponent];