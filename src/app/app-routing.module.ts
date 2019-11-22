import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { GenerateNewAddressComponent } from './dashboard/generate-new-address/generate-new-address.component';
import { AddExistingAddressComponent } from './dashboard/add-existing-address/add-existing-address.component';
import { AddressOptionsComponent } from './dashboard/address-options/address-options.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardMainComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },

  {
    path: 'generateNewAddress',
    component: GenerateNewAddressComponent
  },
  {
    path: 'addExistingAddress',
    component: AddExistingAddressComponent
  },
  {
    path: 'addressOption',
    component: AddressOptionsComponent
  },
  {
    path: '*', redirectTo: '/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
