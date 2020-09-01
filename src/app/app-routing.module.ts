import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatchNotesComponent } from './hidden/patch-notes/patch-notes.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { BackgroundComponent } from './main/background/background.component';
import { AboutComponent } from './main/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BackgroundComponent,
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'patch_notes',
    component: PatchNotesComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
