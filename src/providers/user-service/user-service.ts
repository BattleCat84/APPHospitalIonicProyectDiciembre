import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getDoctores() {
    console.log("servicio");
    return this.http.get("http://localhost:8080/Hospitalsanjosevp3Maven-1.0-SNAPSHOT/webresources/org.hospitalsanjose.hospitalsanjosevp3maven.doctor");
  }
  //realiza un nuevo registro en la base de datos
  postDoctores(doctores) {
    console.log("servicio");
    return this.http.post("http://localhost:8080/Hospitalsanjosevp3Maven-1.0-SNAPSHOT/webresources/org.hospitalsanjose.hospitalsanjosevp3maven.doctor",
      doctores,
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
