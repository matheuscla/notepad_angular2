import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { NotepadService } from './services/notepad.service';
import { NotepadFormComponent } from './notepad-form/notepad-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotepadDetailsComponent } from './notepad-details/notepad-details.component';
import { NotepadRoutingModule } from './notepad.routing.module';

@NgModule({
  declarations: [NotepadComponent, NotepadListComponent, NotepadFormComponent, NotepadDetailsComponent],
  imports: [
    CommonModule,
    NotepadRoutingModule,
    ReactiveFormsModule
  ],
  exports: [NotepadComponent],
  providers: [NotepadService]
})

export class NotepadModule {}
