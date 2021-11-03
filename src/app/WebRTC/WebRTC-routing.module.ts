import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebRTCPage } from './WebRTC.page';

const routes: Routes = [
  {
    path: '',
    component: WebRTCPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRTCPageRoutingModule {}
