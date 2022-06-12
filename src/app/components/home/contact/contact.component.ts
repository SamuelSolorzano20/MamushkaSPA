import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:FormGroup = new FormGroup({
    Name: new FormControl(''),
    Email:new FormControl(''),
    PhoneNumber:new FormControl(''),
    Comments:new FormControl(''),
  });
  constructor(private readonly db:AngularFirestore) { }

  ngOnInit(): void {
  }
  async Submit()
  {
    if (this.form.value){
        const inserted = await this.db.collection('Contact').add(this.form.value);
        if(inserted){
          this.form.reset();
        }
        else{
          return;
        }
    }
  }
}
