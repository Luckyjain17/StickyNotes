import * as React from "react";
import "./App.css";
import NoteList from "./Component/NoteList";
import "../src/style/project.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import SearchAppBar from "./Component/SearchAppBar";
import Header from "./Component/Header";
function App() {
  const [notes, setNotes] = useState([]);
  
const [searchText,setSearchText]=useState('');
const [darkMode,setDarkMode]=useState(false);
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
  const deleteNote =(id)=>{
    const newFilter=notes.filter((note)=>note.id!==id);
    setNotes(newFilter);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="App">
      <Header handleDarkMode={setDarkMode}/>
      <SearchAppBar handleSearchNotes={setSearchText}/>
      <NoteList 
       notes={notes.filter((note) =>note.text.toLowerCase().includes(searchText.toLowerCase()))}
       handleAddNote={addNote}
       handleDelete={deleteNote}/>
    </div>
    </div>
  );
}

export default App;
