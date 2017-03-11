import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotepadComponent } from './notepad.component';
import { NotepadDetailsComponent } from './notepad-details/notepad-details.component';

const notepadRoutes: Routes = [
  {
    path: 'notepad', component: NotepadComponent
  },
  {
    path: 'notepad/:id', component: NotepadDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(notepadRoutes)],
  exports: [RouterModule]
})

export class NotepadRoutingModule {}
