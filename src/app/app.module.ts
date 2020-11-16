import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonTabsComponent,
    ModuleListComponent,
    CourseTableComponent,
    CourseViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
