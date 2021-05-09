import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroducePageRoutingModule } from './introduce-routing.module';

import { IntroducePage } from './introduce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroducePageRoutingModule
  ],
  declarations: [IntroducePage]
})
export class IntroducePageModule {}
