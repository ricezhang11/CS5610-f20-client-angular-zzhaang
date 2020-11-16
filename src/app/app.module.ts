import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseListComponent,
    LessonTabsComponent,
    ModuleListComponent,
    TopicPillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
