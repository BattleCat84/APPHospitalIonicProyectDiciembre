import { Component } from '@angular/core';
import { NavController, ModalController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
  selector: 'page-activityadminpost',
  templateUrl: 'activityadminpost.html'
})
export class ActivityAdminPostPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public service: UserServiceProvider,
    public fb: FormBuilder,
    private modalCtrl: ModalController) {

    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido1: ['', [Validators.required]],
      apellido2: ['', [Validators.required]],
      iosTrabajados: ['', [Validators.required]]
    });
  }

  postStudent() {
    var doctores = {
      nombre: this.myForm.get('nombre').value,
      apellido1: this.myForm.get('apellido1').value,
      apellido2: this.myForm.get('apellido2').value,
      aiosTrabajados: this.myForm.get('aiosTrabajados').value  
    }

    this.service.postDoctores(doctores).subscribe(
      (data) => {
        //Aquí deberías mostrar una ventana modal que dijera que se ha guardado la información
        let dataModal = this.modalCtrl.create(data);
        dataModal.present();

        console.log(data);
      },
      (error) => {
        //Aquí deberías mostrar una ventana modal que mostrara un error
        let errorModal = this.modalCtrl.create(error);
        errorModal.present();
        console.log(error);
      }
    );
  }

}
