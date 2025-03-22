import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeAdminComponent } from './layout/home-admin/home-admin.component';
import { SideButtonComponent } from './layout/components/sidebarComponents/side-button/side-button.component';
import { ProfileCardComponent } from './layout/components/profile-card/profile-card.component';

import { LucideAngularModule, LayoutDashboard, LayoutList ,MapPinCheck,UserRoundPlus,LogOut   } from 'lucide-angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    SidebarComponent,
    HeaderComponent,
    HomeAdminComponent,
    SideButtonComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LucideAngularModule.pick({ LayoutDashboard,LayoutList,MapPinCheck,UserRoundPlus,LogOut   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
