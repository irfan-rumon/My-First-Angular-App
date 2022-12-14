import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Framework } from '../../framework';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-framework-item',
  templateUrl: './framework-item.component.html',
  styleUrls: ['./framework-item.component.css']
})
export class FrameworkItemComponent implements OnInit {
  @Input() framework: Framework;

  @Output() onDeleteFramework: EventEmitter<Framework> = new EventEmitter();
  @Output() onEditFramework: EventEmitter<Framework> = new EventEmitter();
  
 
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(framework:Framework) {
    this.onDeleteFramework.emit(framework);
  }

  onEdit(framework:Framework) {
    this.onEditFramework.emit(framework);
  }
}
