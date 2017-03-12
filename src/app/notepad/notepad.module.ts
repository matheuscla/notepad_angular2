import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { NotepadService } from './services/notepad.service';
import { NotepadFormComponent } from './notepad-form/notepad-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotepadDetailsComponent } from './notepad-details/notepad-details.component';
import { NotepadRoutingModule } from './notepad.routing.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [NotepadComponent, NotepadListComponent, NotepadFormComponent, NotepadDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NotepadRoutingModule,
    Ng2FilterPipeModule,
    ReactiveFormsModule
  ],
  exports: [NotepadComponent],
  providers: [NotepadService]
})

export class NotepadModule {}
