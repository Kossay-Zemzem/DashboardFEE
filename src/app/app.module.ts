import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//ICON IMPORTS-------------------------------------
import { LucideAngularModule, LayoutDashboard, LayoutList ,MapPinCheck,UserRoundPlus,LogOut   } from 'lucide-angular';
//-------------------------------------------------
//COMPONENTS IMPORTS-------------------------------
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SideButtonComponent } from './layout/components/side-button/side-button.component';
import { ProfileCardComponent } from './layout/components/profile-card/profile-card.component';

//LIST OF PAGES-------------------------------------
import { listPages } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SideButtonComponent,
    ProfileCardComponent,
    listPages, 
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
