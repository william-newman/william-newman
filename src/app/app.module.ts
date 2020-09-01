import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './main/background/background.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { AboutComponent } from './main/about/about.component';
import { PatchNotesComponent } from './hidden/patch-notes/patch-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    ProjectsComponent,
    AboutComponent,
    PatchNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
