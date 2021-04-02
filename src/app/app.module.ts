import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
      { path: '', component: SummaryComponent },
      { path: 'navigator', component: NavigatorComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavigatorComponent, SummaryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
