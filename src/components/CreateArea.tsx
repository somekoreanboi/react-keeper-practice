import React, { ChangeEvent, FormEvent, MouseEvent, MouseEventHandler, useState } from "react";
import { NoteType } from "./types/note.type";



function CreateArea(props: CreateAreaPropType) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    props.onAdd(note);
    setNote(
      {
        title: "",
        content: ""
      }
    )
  }

  return (
    <div>
      <form>
        <input 
        name="title" 
        value={note.title} 
        onChange={handleChange} 
        placeholder="Title" />
        <textarea 
        name="content" 
        value={note.content} 
        onChange={handleChange} 
        placeholder="Take a note..." 
        rows={3} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

interface CreateAreaPropType {
  onAdd: (note: NoteType) => void;
}

