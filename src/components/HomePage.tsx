import React from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { NoteType } from "./types/note.type";


function HomePage() {

    const [notes, setNotes] = useState<Array<NoteType>>([]);

    function addNote(newNote: NoteType) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    }
    
    function deleteNote(id: number)  {
      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }

    return (
      <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    );
  }

  export default HomePage;