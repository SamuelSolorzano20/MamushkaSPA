import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form:FormGroup = new FormGroup({
    Name: new FormControl('',Validators.required),
    Email:new FormControl('',Validators.pattern(/([a-zA-Z0-9_.-]+)@gmail([\.])com$/)),
    PhoneNumber:new FormControl('',Validators.pattern(/[0-9]{4}-[0-9]{4}/)),
    Comments:new FormControl('',),
  });
  constructor(private readonly db:AngularFirestore) { }

  ngOnInit(): void {
  }
  async Submit()
  {
    if (this.form.valid){
        const inserted = await this.db.collection('Contact').add(this.form.value);
        if(inserted){
          this.form.reset();
        }
        else{
          console.log("Datos incorrectos")
          return;
        }
    }
  }
}
