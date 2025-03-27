import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//ICON IMPORTS-------------------------------------
import { LucideAngularModule, LayoutDashboard, LayoutList ,
  MapPinCheck,UserRoundPlus,LogOut,Search,Bell,Pencil,Trash2} from 'lucide-angular';
//-------------------------------------------------
//COMPONENTS IMPORTS-------------------------------
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SideButtonComponent } from './layout/components/side-button/side-button.component';
import { ProfileCardComponent } from './layout/components/profile-card/profile-card.component';

//LIST OF PAGES-------------------------------------
import { listPages } from './app-routing.module';
//LIST OF OTHER COMPONENTS---------------------------
import { AuthPageComponent } from './layout/auth-page/auth-page.component';
import { SearchBarComponent } from './layout/components/search-bar/search-bar.component';
import { ComiteFilterComponent } from './layout/components/comite-filter/comite-filter.component';
import { FilterItemComponent } from './layout/components/comite-filter/filter-item/filter-item.component';
import { MembresListeComponent } from './layout/components/membres-liste/membres-liste.component';
import { MembreItemComponent } from './layout/components/membres-liste/membre-item/membre-item.component';
import { YesNoIndicatorComponent } from './layout/components/yes-no-indicator/yes-no-indicator.component';


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
    MembresListeComponent,
    MembreItemComponent,
    YesNoIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    LucideAngularModule.pick({ LayoutDashboard,LayoutList,MapPinCheck,
      UserRoundPlus,LogOut,Search,Bell,Pencil,Trash2  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
