import { Routes } from '@angular/router';


import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountryMaintComponent } from './countries/country-maint/country-maint.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterComponent } from '../fw/users/register/register.component';

export const appRoutes: Routes = [  
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent,
    children: [      
      { path: 'dashboard', component: DashboardComponent },
      { path: 'country-list/:count', component: CountryListComponent },
      { path: 'country-detail/:country', component: CountryDetailComponent },
      { path: 'country-maint', component: CountryMaintComponent },
      { path: 'settings', component: SettingsComponent }
   ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];