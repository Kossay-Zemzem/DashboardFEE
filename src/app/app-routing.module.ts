import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { MembresPageComponent } from './layout/membres-page/membres-page.component';
import { TachePageComponent } from './layout/tache-page/tache-page.component';
import { DemandePageComponent } from './layout/demande-page/demande-page.component';

const routes: Routes = [
  {path:"",redirectTo:"/membres", pathMatch:"full"},
  {path:"membres",component:MembresPageComponent},
  {path:"taches",component:TachePageComponent},
  {path:"demande",component:DemandePageComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exporting the list of pages instead of each page separately
export const listPages = [PageNotFoundComponent,MembresPageComponent,TachePageComponent,DemandePageComponent];