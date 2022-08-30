import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    name: new FormControl(''),
    version: new FormControl(''),
    date: new FormControl('')
  });

  constructor() { }


  ngOnInit(): void {
  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.reactiveForm.value);
  }
}
