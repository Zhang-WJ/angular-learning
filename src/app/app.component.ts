import { Component } from '@angular/core';
import { StocksService, StockInterface} from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>; // Declares a property of an array of stocks
  constructor(service: StocksService) {
    service.load(['aapl']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
