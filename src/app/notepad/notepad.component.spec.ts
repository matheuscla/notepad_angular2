import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadComponent } from './notepad.component';
import { NotepadFormComponent } from './notepad-form/notepad-form.component';
import { NotepadListComponent } from './notepad-list/notepad-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotepadService } from './services/notepad.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotepadComponent', () => {
  let component: NotepadComponent;
  let fixture: ComponentFixture<NotepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotepadComponent,
        NotepadFormComponent,
        NotepadListComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        Ng2FilterPipeModule,
        RouterTestingModule
      ],
      providers: [
        NotepadService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
