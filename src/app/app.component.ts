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

  togglePopup2() {
    (document.getElementById('popup2') as HTMLFormElement).classList.toggle("active");
  }

  togglePopup3() {
    (document.getElementById('popup3') as HTMLFormElement).classList.toggle("active");
  }

  AddList() {
    const {value: data} = (document.getElementById("listInput") as HTMLFormElement)
    this.dataService.PostList(data);
    location.reload();
  }

  AddTask() {
    //TODO
  }

  AddUser() {
    //TODO
  }

  RefreshUsers() {
    this.dataService.getUser()
      .subscribe(data => {
        this.user$ = data;
        this.changeDetection.detectChanges();
      });
  }
  CheckStatus(status: boolean) {
    return {
      'checked': status,
      '': !status
    }
  }
  Check(title: any) {
    const {value: data} = (document.getElementById("" + title) as HTMLFormElement)
    this.dataService.PostStatus(data);
  }
}
