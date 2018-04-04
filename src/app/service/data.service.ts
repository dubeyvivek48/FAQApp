import { Injectable } from '@angular/core';
import {Question} from '../models/question';
@Injectable()
export class DataService {
  Questions:Question[];
  constructor() { 
    /*this.Questions=[
      {
        text:"What's your name ?",
        ans:"Vivek",
        hide:false
      },
      {
        text:"What's your facorit color ?",
        ans:"blue",
        hide:true
      },
      {
        text:"What's your favorit language ?",
        ans:"javascript",
        hide:true
      }     
    ];
    */
  }
  getQuestion(){
    if(localStorage.getItem('Question')===null){
      this.Questions=[];
    }
    else{
      this.Questions=JSON.parse(localStorage.getItem('Question'));
    }
    return this.Questions;
  }

  addQuestion(question:Question){
    this.Questions.unshift(question);
    let que;

    if(localStorage.getItem('Question')===null){
      que=[];
      que.unshift(question);
      localStorage.setItem('Question',JSON.stringify(que));
    }
    else{
      que=JSON.parse(localStorage.getItem('Question'));
      que.unshift(question);
      localStorage.setItem('Question', JSON.stringify(que));
    }

  }
  removeQuestion(question:Question){
    for(let i=0;i<this.Questions.length;i++){
      if(this.Questions[i]==question){
       this.Questions.splice(i , 1);
       localStorage.setItem('Question',JSON.stringify(this.Questions));
      }
    }
  }
}
