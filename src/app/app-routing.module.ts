import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {QuizzesComponent} from './components/quizzes-component/quizzes-component.component';
import {QuizComponent} from './components/quiz-component/quiz-component.component';
import {AttemptsComponent} from './components/attempts-component/attempts-component.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/quizzes', component: QuizzesComponent},
  {path: ':layout/courses/:cid/quizzes/:qid', component: QuizComponent},
  {path: 'attempts/:aid', component: AttemptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
