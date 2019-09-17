import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ChallengeQuestion } from '../challenge-question';

@Component({
  selector: 'app-challenge-question',
  templateUrl: './challenge-question.component.html',
  styleUrls: ['./challenge-question.component.css']
})
export class ChallengeQuestionComponent implements OnInit {

  challengeQuestion: ChallengeQuestion;

  constructor( private challengeService: ChallengeService ) { }

  ngOnInit() {
    this.getChallengeQuestion();
  }

  getChallengeQuestion(): void{
    this.challengeService.getChallengeVariables()
    .subscribe(challengeQuestion => {this.challengeQuestion = challengeQuestion,
      console.log('Data: ' + challengeQuestion)});
  }
}
