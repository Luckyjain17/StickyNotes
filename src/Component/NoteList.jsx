import { mobileStepperClasses } from "@mui/material";
import React from "react";
import Note from "./Note";
import AddNote from "../AddNote";
const NoteList = ({ notes, handleAddNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};
export default NoteList;
