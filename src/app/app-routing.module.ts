import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './layout/home-admin/home-admin.component';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  {path:"home",component:HomeAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
