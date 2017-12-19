import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Activity2Page } from "../activity2/activity2";
import { Activity4QuienEsTuMedicoPage } from "../activity4quienestumedico/activity4quienestumedico";
import { Activity5FormularioPage } from "../activity5formulario/activity5formulario";


@Component({
  selector: 'page-activity3',
  templateUrl: 'activity3.html'
})
export class Activity3Page {

  username: string;

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    this.username = window.localStorage.getItem('username');
  }

  logout(): void {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');

    this.navCtrl.setRoot(Activity2Page);
    this.navCtrl.popToRoot();
  }   

  irATuMedico(){
    this.navCtrl.push(Activity4QuienEsTuMedicoPage);

  }

  irAPedirCita() {
    this.navCtrl.push(Activity5FormularioPage);

  }
}
