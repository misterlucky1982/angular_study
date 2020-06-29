import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.components';
import { ServerComponent } from './server/server.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, ServerComponent, NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
