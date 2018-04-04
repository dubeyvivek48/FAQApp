import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import {Question} from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  Questions:Question[];
  constructor(public dataService:DataService) { 
   
  }

  ngOnInit() {
    this.Questions=this.dataService.getQuestion();
  }
  addQuestion(question:Question){
    this.dataService.addQuestion(question);   
  }

}
