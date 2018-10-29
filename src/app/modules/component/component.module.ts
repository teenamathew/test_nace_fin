import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent]
})
export class ComponentModule { }
