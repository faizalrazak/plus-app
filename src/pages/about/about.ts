import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DealsDetailPage } from '../deals-detail/deals-detail'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController
    ) {

  }

  viewDetail() {
    let profileModal = this.modalCtrl.create(DealsDetailPage);
    profileModal.present();
  }


}
