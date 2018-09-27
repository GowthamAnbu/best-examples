import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
];

@NgModule({
  imports: [
    MATERIAL_COMPONENTS
  ],
  exports: [
   MATERIAL_COMPONENTS
  ],
})
export class MaterialModule {}
