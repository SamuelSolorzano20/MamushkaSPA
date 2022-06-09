import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore"
import { map, Observable } from 'rxjs';
import {plainToInstance} from 'class-transformer';
import {Place} from '../../models/places'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db:AngularFirestore) {
    this.items = db.collection('places').valueChanges();
   }
  
  ngOnInit(): void {
    this.items.forEach(a => console.log(a));
  }
}