import { Component, OnInit, Input } from '@angular/core';
import {todolist, User} from "./user.model";
import {DataService} from "./data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$!: User[];

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    return this.dataService.getUser()
      .subscribe(data => {
        this.user$ = data;
      });
  }

  name:boolean = false;

  hideFunction(todolistname: {}){
      const slides = document.getElementsByClassName(''+todolistname);

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        if(slide.style.display == "none") {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      }
    this.name = !this.name;
  }

}
