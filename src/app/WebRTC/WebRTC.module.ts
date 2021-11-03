import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WebRTCPage } from './WebRTC.page';

import { WebRTCPageRoutingModule } from './WebRTC-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebRTCPageRoutingModule
  ],
  declarations: [WebRTCPage]
})
export class WebRTCPageModule {}
