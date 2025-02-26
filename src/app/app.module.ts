import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],

  // creators of services that this module contributes to the
  // global collection of services; they become accessible in
  // all parts of the app
  providers: [],

  // components and directives that belong to this module
  // the subset of declarations that should be visible and usable in
  // the component templates of other modules
  declarations: [
    AppComponent
  ],
  
  // identifies the root component that Angular should
  // bootstrap when it starts the application
  bootstrap: [AppComponent]
})
export class AppModule { }
