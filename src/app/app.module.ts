import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QComponent } from './q/q.component';
@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteListComponent,
    QComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
