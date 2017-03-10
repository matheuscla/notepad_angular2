import { Component, OnInit } from '@angular/core';
import { Notepad } from '../notepad.model';
import { NotepadService } from '../services/notepad.service';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.css']
})
export class NotepadListComponent implements OnInit {
  notepads: Notepad[];

  constructor(private notepadService: NotepadService) { }

  ngOnInit() {
    this.notepads = this.notepadService.getNotepads();
    console.log(this.notepads);
  }

}
