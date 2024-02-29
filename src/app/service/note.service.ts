import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];

  constructor() {}

  getAllNotes(): Note[] {
    return this.notes;
  }

  addNewNote(note: Note) {
    this.notes.push(note);
    console.log(this.notes);
    
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter((i) => i.id !== id);
    console.log(this.notes);
  }
}
