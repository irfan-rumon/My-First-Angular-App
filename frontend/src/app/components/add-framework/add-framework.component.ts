import { Component, OnInit, Output, EventEmitter }  from '@angular/core';
import { Framework } from 'src/app/framework';

@Component({
  selector: 'app-add-framework',
  templateUrl: './add-framework.component.html',
  styleUrls: ['./add-framework.component.css']
})
export class AddFrameworkComponent implements OnInit {
  @Output() onAddFramework: EventEmitter<Framework> = new EventEmitter();
  name: string;
  version: string;
  id: number;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Please add a name of the framework!');
      return;
    }

    if (!this.version) {
      alert('Please add a version of the framework!');
      return;
    }

    const newFramework: Framework = {
      id: this.id,
      name: this.name,
      version: this.version,
    };

    this.onAddFramework.emit(newFramework);
    this.id = 0;
    this.name = '';
    this.version = '';
  }

}
