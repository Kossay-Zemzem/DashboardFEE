import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//ICON IMPORTS-------------------------------------
import { LucideAngularModule, LayoutDashboard, LayoutList ,
  MapPinCheck,UserRoundPlus,LogOut,Search,Bell} from 'lucide-angular';
//-------------------------------------------------
//COMPONENTS IMPORTS-------------------------------
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SideButtonComponent } from './layout/components/side-button/side-button.component';
import { ProfileCardComponent } from './layout/components/profile-card/profile-card.component';

//LIST OF PAGES-------------------------------------
import { listPages } from './app-routing.module';
import { AuthPageComponent } from './layout/auth-page/auth-page.component';
import { SearchBarComponent } from './layout/components/search-bar/search-bar.component';
import { ComiteFilterComponent } from './layout/components/comite-filter/comite-filter.component';
import { FilterItemComponent } from './layout/components/comite-filter/filter-item/filter-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    SideButtonComponent,
    ProfileCardComponent,
    listPages,
    AuthPageComponent,
    SearchBarComponent,
    ComiteFilterComponent,
    FilterItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LucideAngularModule.pick({ LayoutDashboard,LayoutList,MapPinCheck,
      UserRoundPlus,LogOut,Search,Bell    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
