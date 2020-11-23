import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { CourseService } from '../services/CourseService';
import { ModuleService } from '../services/ModuleService';
import { LessonService } from '../services/LessonService';
import { QuizzesServiceClient} from '../services/quiz.service.client';
import { QuestionsServiceClient} from '../services/question.service.client';
import { FormsModule } from '@angular/forms';
import {QuizzesComponent} from './components/quizzes-component/quizzes-component.component';
import { QuizComponent } from './components/quiz-component/quiz-component.component';
import { TrueFalseQuestionComponent } from './components/true-false-question-component/true-false-question-component.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question-component/multiple-choice-question-component.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LessonTabsComponent,
    ModuleListComponent,
    CourseTableComponent,
    CourseViewerComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [CourseService, ModuleService, LessonService, QuizzesServiceClient, QuestionsServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
