import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadListComponent } from './notepad-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotepadService } from '../services/notepad.service';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotepadListComponent', () => {
  let component: NotepadListComponent;
  let fixture: ComponentFixture<NotepadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadListComponent ],
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
    fixture = TestBed.createComponent(NotepadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
