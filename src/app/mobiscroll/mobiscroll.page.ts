import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiscroll',
  templateUrl: './mobiscroll.page.html',
  styleUrls: ['./mobiscroll.page.scss'],
})
export class MobiscrollPage implements OnInit {
  events: any;

  eventSettings: MbscEventcalendarOptions = {
      theme: 'ios',
      themeVariant: 'dark',
      display: 'inline',
      view: {
          calendar: { type: 'month' },
          eventList: { type: 'month', scrollable: true }
      }
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com/events/', 'callback').subscribe((resp: any) => {
            this.events = resp;
        });
  }

}
