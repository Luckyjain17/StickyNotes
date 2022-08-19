import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ id, text, date }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <DeleteIcon className="delete" />
      </div>
    </div>
  );
}
