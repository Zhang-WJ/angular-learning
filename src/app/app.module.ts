import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StocksService} from './services/stocks.service';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ManageComponent } from './components/manage/manage.component';
import {AppRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashbordComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
