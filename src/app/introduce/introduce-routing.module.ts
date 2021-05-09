import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroducePage } from './introduce.page';

const routes: Routes = [
  {
    path: '',
    component: IntroducePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroducePageRoutingModule {}
