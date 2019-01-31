import { Component, OnInit } from '@angular/core';
import { ListViewEventData } from 'nativescript-ui-listview';

@Component({
  selector: 'ns-send-recive',
  templateUrl: './send-recive.component.html',
  styleUrls: ['./send-recive.component.css'],
  moduleId: module.id
})
export class SendReciveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dataItems = ["a", "b", "c"];

  public onItemLoading(args: ListViewEventData) {
  
  }
}
