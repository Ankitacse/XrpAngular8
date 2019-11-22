import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { Route } from '@angular/router';
import { GenerateNewAddressComponent } from './generate-new-address/generate-new-address.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddressOptionsComponent } from './address-options/address-options.component';
import { AddExistingAddressComponent } from './add-existing-address/add-existing-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardMainComponent,
    // children: [
    //   { path: 'addressOption', component: AddressOptionsComponent },
    //   { path: 'dashboard', component: DashboardMainComponent },
    //   { path: 'generateAddress', component:GenerateNewAddressComponent },
    //   { path: '', redirectTo: '/dashboard/addressOption', pathMatch: 'full' }
    


    // ]

  }


];
@NgModule({
  declarations: [DashboardMainComponent, GenerateNewAddressComponent, AddressOptionsComponent, AddExistingAddressComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  exports:[DashboardMainComponent,GenerateNewAddressComponent,AddressOptionsComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class DashboardModule { }
