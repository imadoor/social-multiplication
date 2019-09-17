import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChallengeQuestionComponent } from './challenge-question/challenge-question.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { ChallengeService } from './challenge.service';


@NgModule({
  declarations: [
    AppComponent,
    ChallengeQuestionComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
