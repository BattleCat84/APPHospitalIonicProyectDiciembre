import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Activity3Page } from '../activity3/activity3';
import { ActivityAdminPostPage } from '../activityadminpost/activityadminpost';

@Component({
  selector: 'page-activity2',
  templateUrl: 'activity2.html',

})

export class Activity2Page {

  formgroup: FormGroup;

  constructor(public navCtrl: NavController, public formbuilder: FormBuilder) {
    

    this.formgroup = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],

      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

 
  submit(value: any): void {
    //alert(JSON.stringify(this.formgroup.value));
    if (this.formgroup.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      this.navCtrl.push(Activity3Page);
    } else {
      this.formgroup.valid; 
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      this.navCtrl.push(ActivityAdminPostPage);
    }
  }

  irAOtraPagina() {
    this.navCtrl.push(ActivityAdminPostPage);

  }
}


   










 
 

  


 
    
    
