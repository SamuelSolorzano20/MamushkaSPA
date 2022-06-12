import { Component, OnInit } from '@angular/core';
//import * as AOS from 'aos';
declare let AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SewingSPA';

  ngOnInit(){
    AOS.init();
  }
}

