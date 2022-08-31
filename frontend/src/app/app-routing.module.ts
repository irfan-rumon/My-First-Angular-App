import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { FrameworkItemComponent } from './components/framework-item/framework-item.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AddFrameworkComponent } from './components/add-framework/add-framework.component';
import { HomeComponent } from './components/home/home.component';

  const routes: Routes = [
    { path: '', component: ParentComponent,
    children: [
      {
        path: '', 
        component: HomeComponent, 
      },
      {
        path: 'list', // child route path
        component: ListComponent, // child route component that the router renders
      },
      {
        path: 'add',
        component:AddComponent, // another child route component that the router renders
      },
      {
        path: 'edit',
        component: EditComponent, // another child route component that the router renders
      },
      {
        path: 'home',
        component: HomeComponent, // another child route component that the router renders
      },
    ],

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
