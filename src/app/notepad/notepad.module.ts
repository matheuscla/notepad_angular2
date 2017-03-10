import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { NotepadService } from './services/notepad.service';
import { NotepadFormComponent } from './notepad-form/notepad-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotepadComponent, NotepadListComponent, NotepadFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NotepadComponent],
  providers: [NotepadService]
})

export class NotepadModule {}
