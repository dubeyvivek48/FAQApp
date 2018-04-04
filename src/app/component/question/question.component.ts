import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('que') que:Question;
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  removeQuestion(question:Question){
    this.dataService.removeQuestion(question);
  }

}
