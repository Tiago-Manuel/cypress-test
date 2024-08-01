import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular';
  weather: any;
  number: string = "";
  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    console.log("i init")
  }

  getWeather() {
    this.http.get('https://localhost:7019/WeatherForecast/Get').subscribe(res => {
      this.weather = res;
    })

    this.http.get('https://localhost:7019/WeatherForecast/GetNumber').subscribe( data => {
      console.log(data.toString())
      this.number = data.toString();
    })
  }
}

"string hello on etwo"
