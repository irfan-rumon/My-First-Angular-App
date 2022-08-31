import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Framework } from 'src/app/framework';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  frameworks : Framework[];
  @Input() isEdit: boolean = false;
  @Input() isHome:boolean = false;
  @Input() isList: boolean = false;
  @Input() isAdd: boolean = false;
  currentEditableFr: Framework;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getFrameworks().subscribe((frameworks) => (this.frameworks = frameworks));
    console.log(this.frameworks);
  }

  

  addFramework(framework: Framework) {
    console.log('entered!!');
    this.api.addFramework(framework).subscribe((framework) => this.frameworks.push(framework));
  }

  editBtnClicked(framework: Framework){
    console.log(framework);
    this.isEdit = true;
    this.currentEditableFr = framework;
    
  }

  deleteFramework(framework: Framework) {
    this.api
      .deleteFramework(framework)
      .subscribe(
        () => (this.frameworks = this.frameworks.filter((t) => t.id !== framework.id))
      );
  }

  editFramework(framework: Framework) {
    console.log("edite entered------>!!");
    this.api.editFramework(framework).subscribe(
      (res) => console.log(res)
    );
    this.isEdit = false;
    console.log(this.frameworks);
  }

}
