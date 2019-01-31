import { Component, OnInit } from '@angular/core';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'ns-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  moduleId: module.id
})
export class InputFieldComponent implements OnInit {

  constructor() { }

  
  itemHeight;
  itemWidth;
 

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    
    if(!platformModule.isIOS) {
      this.itemHeight = deviceHeight * 0.09;
      this.itemWidth = deviceWidth * 0.22;
    } else {
      this.itemHeight = deviceHeight * 0.1;
      this.itemWidth = deviceWidth * 0.26;
    }
  }

  items = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
    { number: '6' },
    { number: '7' },
    { number: '8' },
    { number: '9' },
    { number: '.' },
    { number: '0' },
    { number: 'del' }
  ]


}