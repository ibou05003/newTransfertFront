import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
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
  MatStepperModule
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
