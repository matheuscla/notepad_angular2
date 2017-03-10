import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { NotepadService } from './services/notepad.service';

@NgModule({
  declarations: [NotepadComponent, NotepadListComponent],
  imports: [CommonModule],
  exports: [NotepadComponent],
  providers: [NotepadService]
})

export class NotepadModule {}
