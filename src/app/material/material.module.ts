import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule } from '@angular/material';

const MaterialComponents= [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
]


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
