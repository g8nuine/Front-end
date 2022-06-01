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
    // setTimeout(() => {
    //   this.hideInit();
    // }, 100);
  }

  hideInit() {
    const slides = document.getElementsByClassName("hideInit");

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none"
      // if(slide.style.display == "none") {
      //   slide.style.display = "block";
      // } else {
      //   slide.style.display = "none";
      // }
    }
  }


  hideFunction(todolistid: string){
      const slides = document.getElementsByClassName("" + todolistid);

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
    // console.log(this.actualListId);
    this.dataService.PostTask(title, content, this.actualListId);
    setTimeout(() => {
      this.RefreshUsers();
    }, 100);
  }


  AddUser() {
    //TODO
  }

  DeleteList(listId: number) {
    this.dataService.DeleteList(listId);
    setTimeout(() => {
      this.RefreshUsers();
    }, 100);
  }

  DeleteTask(listId: number, taskId: number) {
    this.dataService.DeleteTask(listId, taskId);
    setTimeout(() => {
      this.RefreshUsers();
    }, 100);
  }

  RefreshUsers() {
    this.dataService.getUser()
      .subscribe(data => {
        this.user$ = data;
      });

  }

  CheckIni(status: any) {
    return {
      checked: status == true,
      unchecked: status == false
    }
  }


  Check(taskid: any, classid: any, taskt: any, taskc: any) {
    const checkBox = (document.getElementById("" + taskid) as HTMLFormElement);
    const slides = document.getElementsByClassName(""+classid);

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      if(checkBox['checked'] == true) {
        slide.style.textDecoration = "line-through";
        this.dataService.PostStatus(taskid, taskt, taskc, true);
      } else {
        slide.style.textDecoration = "none";
        this.dataService.PostStatus(taskid, taskt, taskc, false);
      }
    }
  }

}
