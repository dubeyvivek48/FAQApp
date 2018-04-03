import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  Questions:object[];
  constructor() { 
    this.Questions=[
      {
        text:"What's your name ?",
        ans:"Vivek"
      },
      {
        text:"What's your facorit color ?",
        ans:"blue"
      },
      {
        text:"What's your favorit language ?",
        ans:"javascript"
      }     
    ]
  }

  ngOnInit() {
  }

}
