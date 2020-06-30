import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coords:any;
  isGoogleMapAvailable;
  isAppleMapAvailable;
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor(private geolocation: Geolocation,
    private launchNavigator: LaunchNavigator) {}

  ngOnInit(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
      console.log(resp.coords)
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     this.isGoogleMapAvailable = this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS);
  }
  onChange($event) {
    console.log($event);
  }
  async checkForMapApps(){
    this.isGoogleMapAvailable = await this.launchNavigator.isAppAvailable(this.launchNavigator.APP.GOOGLE_MAPS)
    this.isAppleMapAvailable = await this.launchNavigator.isAppAvailable(this.launchNavigator.APP.APPLE_MAPS)
  }

  async launchMaps(type){
    let mapApp;
    if(type=='google' && this.isGoogleMapAvailable){
      mapApp = this.launchNavigator.APP.GOOGLE_MAPS;
    }
    else{
      mapApp = this.launchNavigator.APP.APPLE_MAPS;
    }
    let options: LaunchNavigatorOptions = {
      // start: [this.coords.latitude, this.coords.longitude],
      start:'London, ON',
      app: mapApp,
      transportMode: this.launchNavigator.TRANSPORT_MODE.DRIVING
    };
    await this.launchNavigator.navigate('Toronto, ON', options);
  }
}
