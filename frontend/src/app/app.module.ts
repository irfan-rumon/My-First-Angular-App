import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFrameworkComponent } from './components/add-framework/add-framework.component';
import { ParentComponent } from './components/parent/parent.component';
import { FrameworkItemComponent } from './components/framework-item/framework-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditFrameworkComponent } from './components/edit-framework/edit-framework.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFrameworkComponent,
    ParentComponent,
    FrameworkItemComponent,
    EditFrameworkComponent,
    ReactiveFormComponent,
    NavbarComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
