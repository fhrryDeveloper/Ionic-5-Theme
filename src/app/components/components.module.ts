import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { CheckboxWrapperComponent } from './checkbox-wrapper/checkbox-wrapper.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    CheckboxWrapperComponent,
    ShowHidePasswordComponent,
    CounterInputComponent,
    RatingInputComponent,
  ],
  exports: [
    CheckboxWrapperComponent,
    ShowHidePasswordComponent,
    CounterInputComponent,
    RatingInputComponent,
  ]
})
export class ComponentsModule {}
