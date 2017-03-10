import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';

@NgModule({
  declarations: [NotepadComponent],
  imports: [CommonModule],
  exports: [NotepadComponent]
})

export class NotepadModule {}
