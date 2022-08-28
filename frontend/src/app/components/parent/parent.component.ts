import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Framework } from 'src/app/framework';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  frameworks : Framework[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getFrameworks().subscribe((frameworks) => (this.frameworks = frameworks));
    console.log(this.frameworks);
  }

  deleteFramework(framework: Framework) {
    this.api
      .deleteFramework(framework)
      .subscribe(
        () => (this.frameworks = this.frameworks.filter((t) => t.id !== framework.id))
      );
  }

  addFramework(framework: Framework) {
    this.api.addFramework(framework).subscribe((framework) => this.frameworks.push(framework));
  }

}
