import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {

  constructor() { }

  ngOnInit() {


     "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=60min&outputsize=compact&apikey=87CWIJDXVDZUBFKC"

  }

}
