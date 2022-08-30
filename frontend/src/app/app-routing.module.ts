import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { FrameworkItemComponent } from './components/framework-item/framework-item.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
  const routes: Routes = [
    { path: '', component: ParentComponent
    },
    {
      path: 'r', component:ReactiveFormComponent
    }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
