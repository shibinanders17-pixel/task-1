import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    api.post("/events", { title, date }).then(() => {
      navigate("/events");
    });
  };

  return (
    <div className = "part">
      <h2>Create Event</h2>
      <input placeholder="Event Name" onChange={e => setTitle(e.target.value)} /> <br />
      <input type="date" onChange={e => setDate(e.target.value)} />
      <button onClick={handleAdd}>Create</button>
    </div>
  );
}


