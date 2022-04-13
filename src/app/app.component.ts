import { Component, OnInit } from '@angular/core';
import {todolist} from "./todolist.model";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  lists$!: todolist[];

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    return this.dataService.getLists()
      .subscribe(data => {
        this.lists$ = data;
      });
  }
}
