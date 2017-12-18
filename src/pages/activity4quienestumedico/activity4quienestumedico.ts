import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-activity4quienestumedico',
  templateUrl: 'activity4quienestumedico.html'
})
export class Activity4QuienEsTuMedicoPage {
  doctores: any;
  myJSON: string = "";

  cardiologia: boolean;
  neurocirugia: boolean;
  cirugia: boolean;
  radiologia: boolean;
  nefrologia: boolean;

  constructor(public alertCtrl: AlertController, public servicios: UserServiceProvider) {

    this.cardiologia = false;
    this.neurocirugia = false;
    this.cirugia = false;
    this.radiologia = false;
    this.nefrologia = false;

    this.getDoctores();
 
  }

  getDoctores() {
    console.log("llamando al servicio");
    this.servicios.getDoctores().subscribe(
      (data) => {
        this.doctores = data;
        this.myJSON = JSON.stringify(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  actualizarCardiologia(){
    this.showAlertCardiologia();
  }

  actualizarNeurocirugia() {
    this.showAlertNeurocirugia();
  }

  actualizarCirugia() {
    this.showAlertCirugia();
  }

  actualizarRadiologia() {
    this.showAlertRadiologia();
  }

  actualizarNefrologia() {
    this.showAlertNefrologia();
  }

  showAlertCardiologia() {
    let alert = this.alertCtrl.create({
      title: 'El Doctor en Cardiologia es Jose Plasencia',
      subTitle: 'Consulta ',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNeurocirugia() {
    let alert = this.alertCtrl.create({
    title: 'La Doctora en Neurocirugia es María Lopez Hernández',
      subTitle: 'Consulta',
        buttons: ['OK']
    });
    alert.present();
  }

  showAlertCirugia() {
    let alert = this.alertCtrl.create({
      title: 'El Doctor en Cirugia es Carlos Suarez Naranjo',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }
  
  showAlertRadiologia() {
    let alert = this.alertCtrl.create({
      title: 'El doctos en Radiologia Antonio Sanchez',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertNefrologia() {
    let alert = this.alertCtrl.create({
      title: 'La doctora en Nefrologia Marina Castro Ojeda',
      subTitle: 'Consulta',
      buttons: ['OK']
    });
    alert.present();
  }

}
