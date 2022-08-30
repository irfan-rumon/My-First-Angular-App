import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
   frForm = new FormGroup({
       name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5)
       ]),
       version: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5)
       ]),
       releaseDate: new FormControl('', [
          Validators.required
       ])
   });


  constructor() {
  
   }

  ngOnInit(): void {}

  get name(){
    return this.frForm.get('name');
  }
  
  get version(){
    return this.frForm.get('version');
  }

  get releaseDate(){
    return this.frForm.get('releaseDate');
  }
  

  onSubmit() {
     console.warn(this.frForm.value);
  }
}
