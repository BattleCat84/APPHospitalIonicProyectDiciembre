import { Component } from '@angular/core';
import { NavController} from "ionic-angular";
import { Activity4QuienEsTuMedicoPage } from "../activity4quienestumedico/activity4quienestumedico";
import { Activity5FormularioPage } from "../activity5formulario/activity5formulario";

@Component({
  selector: 'page-activity3',
  templateUrl: 'activity3.html'
})
export class Activity3Page {

  constructor(public navCtrl: NavController) {
    
  }

  irATuMedico(){
    this.navCtrl.push(Activity4QuienEsTuMedicoPage);

  }

  irAPedirCita() {
    this.navCtrl.push(Activity5FormularioPage);

  }
}
