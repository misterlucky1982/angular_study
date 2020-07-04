import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { Task3Component } from './tasks/task3.class';
//import { Task3User } from './tasks/task3.user';
import { FontBoldDirective } from './custom/app.custom.fontbold';

@NgModule({
  declarations: [
    Task3Component, FontBoldDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [Task3Component]
})
export class AppModule { }
