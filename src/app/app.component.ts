import { Component, OnInit } from '@angular/core';
import { User } from "./user.model";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$!: User[];
  actualListId?: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.RefreshUsers();
  }

  hideFunction(todolistid: {}){
      const slides = document.getElementsByClassName(""+todolistid);

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

  togglePopup2(listId: number) {
    (document.getElementById('popup2') as HTMLFormElement).classList.toggle("active");
    this.actualListId = listId;
  }

  togglePopup3() {
    (document.getElementById('popup3') as HTMLFormElement).classList.toggle("active");
  }

  AddList() {
    const {value: name} = (document.getElementById("listInput") as HTMLFormElement)
    this.dataService.PostList(name);
    setTimeout(() => {
      this.RefreshUsers();
    }, 100);
  }

  AddTask() {
    const {value: title} = (document.getElementById("taskInputTitle") as HTMLFormElement)
    const {value: content} = (document.getElementById("taskInputContent") as HTMLFormElement)
    console.log(this.actualListId);
    this.dataService.PostTask(title, content, this.actualListId);
    setTimeout(() => {
      this.RefreshUsers();
    }, 100);
  }


  AddUser() {
    //TODO
  }

  RefreshUsers() {
    this.dataService.getUser()
      .subscribe(data => {
        this.user$ = data;
      });
  }

  CheckStatus(status: any) {
    if(status == true) {

    }
  }
  checkBoxInit() {

  }
  Check(taskid: any, classid: any) {
    const checkBox = (document.getElementById("" + taskid) as HTMLFormElement);
    const slides = document.getElementsByClassName(""+classid);

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      console.log(taskid)
      if(checkBox['checked'] == true) {
        slide.style.textDecoration = "line-through";
        this.dataService.PostStatus(taskid, true);
      } else {
        slide.style.textDecoration = "none";
        this.dataService.PostStatus(taskid, false);
      }
    }


  }
}
