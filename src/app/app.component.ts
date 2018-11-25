import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sw-map';
  items: Array<Item> = [];

  constructor(private  apiService:  ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData(): void {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log(data);
      this.items = data;
    }, (error) => {
      console.error(error);
    });
  }
}
