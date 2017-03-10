import { notepads } from '../notepad.mocks';

export class NotepadService {

  getNotepads() {
    return notepads;
  }

  addNote(note) {
    notepads.push(note);
  }
}
