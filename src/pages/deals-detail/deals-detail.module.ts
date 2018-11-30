import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsDetailPage } from './deals-detail';

@NgModule({
  declarations: [
    DealsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsDetailPage),
  ],
})
export class DealsDetailPageModule {}
