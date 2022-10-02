import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectsTreeComponent } from './projects-tree/projects-tree.component';
import { ProjectTaskComponent } from './projects-tree/project-task/project-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsTreeComponent,
    ProjectTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
