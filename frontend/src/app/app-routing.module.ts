import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { FrameworkItemComponent } from './components/framework-item/framework-item.component';

  const routes: Routes = [
    { path: '', component: ParentComponent ,
    
    }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
