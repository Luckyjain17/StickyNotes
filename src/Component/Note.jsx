import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ id, text, date, handleDelete }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <DeleteIcon
          className="delete"
          onClick={() => handleDelete(id)}
          size="1.3em"
        />
      </div>
    </div>
  );
}
