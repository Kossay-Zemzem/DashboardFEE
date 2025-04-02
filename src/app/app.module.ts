import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);
//ICON IMPORTS-------------------------------------
import {
  LucideAngularModule, LayoutDashboard, LayoutList,
  MapPinCheck, UserRoundPlus, LogOut, Search, Bell, Pencil, Trash2, Diamond, Users, Timer
} from 'lucide-angular';
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
import { TacheComitePageComponent } from './layout/tache-comite-page/tache-comite-page.component';
import { ListFilterComponent } from './layout/components/list-filter/list-filter.component';
import { TacheCardComponent } from './layout/components/tache-card/tache-card.component';
import { ItemSelectorPillComponent } from './layout/components/item-selector-pill/item-selector-pill.component';



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
    TacheComitePageComponent,
    ListFilterComponent,
    TacheCardComponent,
    ItemSelectorPillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LucideAngularModule.pick({
      LayoutDashboard, LayoutList, MapPinCheck,
      UserRoundPlus, LogOut, Search, Bell, Pencil, Trash2, Diamond, Users, Timer
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' } // Set the Angular locale language to French (for date formatting, etc.)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
