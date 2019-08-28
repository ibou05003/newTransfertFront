import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';

const MaterialComponents= [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatFileUploadModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule
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
