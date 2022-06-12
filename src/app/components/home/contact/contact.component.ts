import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  captcha: string;
  constructor(private readonly db:AngularFirestore,
              private snack:MatSnackBar) { 
    this.captcha = '';
  }

  ngOnInit(): void {
  }
  async Submit()
  {
    if (this.form.valid){
        const inserted = await this.db.collection('Contact').add(this.form.value);
        if(inserted){
          this.form.reset();
          this.snack.open('Formulario Enviado Correctamente', 'Cerrar', {
            duration: 3000
          });
        }
        else{
          console.log("Datos incorrectos")
          return;
        }
    }
  }

  resolved(captchaResponse:string){
    this.captcha = captchaResponse;
    console.log(`CAPTACHA: ${this.captcha}`);
  }
}
