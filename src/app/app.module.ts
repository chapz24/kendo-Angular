import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Kendo UI for Angular 2
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { CategoriesService }   from './northwind.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    //Register the modules
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule

  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
