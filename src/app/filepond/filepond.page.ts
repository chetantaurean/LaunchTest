import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filepond',
  templateUrl: './filepond.page.html',
  styleUrls: ['./filepond.page.scss'],
})
export class FilepondPage implements OnInit {
  @ViewChild('myPond',{static:false}) myPond: any;
  // custom server config
  pondServer = {
    process:(fieldName, file, metadata, load, error, progress, abort) => {
      debugger
      // this.myPond.removeFiles();
      load('s');
      // custom file processing here
      // https://pqina.nl/filepond/docs/patterns/api/server/#advanced
    }
  }
  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    allowReorder:true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: this.pondServer // connect server config above
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
  constructor() { }

  ngOnInit() {
  }

}
