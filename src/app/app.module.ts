import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleTableModule } from "./simple-table/simple-table.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
