import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import $ from 'jquery';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {

  stocks: number[] = [];


  constructor() { }

  ngOnInit() {

    // let promise = new Promise(function(resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=60min&outputsize=compact&apikey=87CWIJDXVDZUBFKC`;
    //   request.onload = function() {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     } else {
    //       reject(Error(request.statusText));
    //     }
    //   }
    //   request.open("GET", url, true);
    //   request.send();
    // });
    //
    // promise.then(function(response) {
    //   let body = JSON.parse(response);
    //   let lastRefreshed = body["Meta Data"][["3. Last Refreshed"]];
    //   console.log(lastRefreshed,body["Time Series (60min)"][lastRefreshed]["4. close"]);
    //
    // });
  }
}
