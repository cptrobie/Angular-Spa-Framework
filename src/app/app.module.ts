import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryMaintComponent } from './countries/country-maint/country-maint.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    DashboardComponent,   
    SettingsComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
