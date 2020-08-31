import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { MyserviceService } from './myservice.service';
@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    HomeComponent,
    ContactusComponent,
    FormsComponent,
    ReactiveFormsComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
