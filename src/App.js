import * as React from "react";
import "./App.css";
import NoteList from "./Component/NoteList";
import "../src/style/project.css";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note",
      date: "01/01/2022",
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date: "05/01/2022",
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date: "01/08/2022",
    },
    {
      id: nanoid(),
      text: "This is my forth Note",
      date: "19/02/2022",
    }
  ]);
  const addNote=(text)=>{
    const date = new Date();
    const newNote ={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes =[...notes, newNote];
    setNotes(newNotes);
  }
  return (
    <div className="App">
      <NoteList notes={notes} handleAddNote={addNote}/>
    </div>
  );
}

export default App;
