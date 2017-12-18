import { Component } from '@angular/core';
import { NavController, ModalController, AlertController} from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-activity6pedircita',
  templateUrl: 'activity6pedircita.html'
})

export class Activity6PedirCitaPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private modalCtrl: ModalController) {
     
  }

  addEvent() {
    let modal = this.modalCtrl.create('Activity6EventModalPage', { selectedDay: this.selectedDay });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    let start = moment(event.starTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']

    });

    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}



