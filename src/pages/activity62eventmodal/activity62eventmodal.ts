import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-activity62eventmodal',
  templateUrl: 'activity62eventmodal.html',
})

export class Activity62EventModalPage {

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }

}
