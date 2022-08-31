import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Framework } from 'src/app/framework';

@Component({
  selector: 'app-edit-framework',
  templateUrl: './edit-framework.component.html',
  styleUrls: ['./edit-framework.component.css']
})
export class EditFrameworkComponent implements OnInit {

  @Output() onEditFramework: EventEmitter<Framework> = new EventEmitter();
  @Input() framework: Framework;
  id: number;
  name: string;
  version: string;
 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    

    const newFramework: Framework = {
      id: this.framework.id,
      name: this.name,
      version: this.version,
    };
    console.log(newFramework)

    this.onEditFramework.emit(newFramework);
    //this.id = 0;
    //this.name = '';
    //this.version = '';
  }

}
