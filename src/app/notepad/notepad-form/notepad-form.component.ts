import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { NotepadService } from '../services/notepad.service';

@Component({
  selector: 'app-notepad-form',
  templateUrl: './notepad-form.component.html',
  styleUrls: ['./notepad-form.component.css']
})
export class NotepadFormComponent implements OnInit {
  notepadForm: FormGroup;
  status = [
    'active',
    'inactive',
    'draft'
  ];
  constructor(private formBuilder: FormBuilder, private notepadService: NotepadService) {
    this.notepadForm = formBuilder.group({
      'id': [Math.random()],
      'status': [''],
      'title': [''],
      'body': [''],
      'views': [0],
      'first_view': []
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.notepadForm.reset();
    this.notepadService.addNote(form);
  }

}
