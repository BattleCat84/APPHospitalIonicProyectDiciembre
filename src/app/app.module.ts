import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Activity1Page } from '../pages/activity1/activity1';
import { Activity2Page } from '../pages/activity2/activity2';
import { Activity3Page } from '../pages/activity3/activity3';
import { Activity4QuienEsTuMedicoPage } from '../pages/activity4quienestumedico/activity4quienestumedico';
import { Activity5FormularioPage } from '../pages/activity5formulario/activity5formulario';
import { Activity6PedirCitaPage } from '../pages/activity6pedircita/activity6pedircita';
import { ActivityAdminPostPage } from '../pages/activityadminpost/activityadminpost';

import { HttpClientModule } from '@angular/common/http';
import { NgCalendarModule } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    Activity1Page,
    Activity2Page,
    Activity3Page,  
    Activity4QuienEsTuMedicoPage,
    Activity5FormularioPage,
    Activity6PedirCitaPage,
    ActivityAdminPostPage
 
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    ItemDetailsPage,
    ListPage,
    Activity1Page,
    Activity2Page,
    Activity3Page,
    Activity4QuienEsTuMedicoPage,
    Activity5FormularioPage,
    Activity6PedirCitaPage,
    ActivityAdminPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}
