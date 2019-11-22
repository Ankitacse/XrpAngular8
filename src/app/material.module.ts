import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  exports: [
    MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressSpinnerModule,
    MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCardModule,
    MatSlideToggleModule, MatListModule, MatStepperModule, MatRadioModule,
    MatCheckboxModule, MatExpansionModule, MatProgressBarModule,
    MatSidenavModule, MatChipsModule, MatTooltipModule,MatRippleModule,
    MatTabsModule, MatTableModule, MatAutocompleteModule,MatTreeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MaterialModule { }
