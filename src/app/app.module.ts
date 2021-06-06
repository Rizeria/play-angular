import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { personReducser } from './person.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCounter2Component } from './my-counter2/my-counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MyCounter2Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, person: personReducser }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
