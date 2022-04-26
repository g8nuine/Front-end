import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from "./user.model";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$!: User[];

  constructor(private dataService: DataService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {
     // this.dataService.getUser()
     //  .subscribe(data => {
     //    this.user$ = data;
     //    this.changeDetection.detectChanges();
     //  });
    this.RefreshUsers();
  }

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
  }
  togglePopup1() {
    (document.getElementById('popup1') as HTMLFormElement).classList.toggle("active");
  }

  Addlist() {
    const {value: data} = (document.getElementById("listInput") as HTMLFormElement)
    this.dataService.PostList(data);
    location.reload();
  }
  RefreshUsers() {
    this.dataService.getUser()
      .subscribe(data => {
        this.user$ = data;
        this.changeDetection.detectChanges();
      });
  }
}
