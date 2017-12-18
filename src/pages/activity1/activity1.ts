import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Activity2Page } from "../activity2/activity2";

@Component({
  selector: 'page-activity1',
  templateUrl: 'activity1.html'
})
export class Activity1Page {
  constructor(public navCtrl: NavController) {
  
  }

  irAOtraPagina() {
    this.navCtrl.push(Activity2Page);

  }

}
