import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { Framework } from 'src/app/framework';

@Component({
  selector: 'app-edit-framework',
  templateUrl: './edit-framework.component.html',
  styleUrls: ['./edit-framework.component.css']
})
export class EditFrameworkComponent implements OnInit {

  @Output() onEditFramework: EventEmitter<Framework> = new EventEmitter();
  id: number;
  name: string;
  version: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    

    const newFramework: Framework = {
      id: this.id,
      name: this.name,
      version: this.version,
    };

    this.onEditFramework.emit(newFramework);
    this.id = 0;
    this.name = '';
    this.version = '';
  }

}
