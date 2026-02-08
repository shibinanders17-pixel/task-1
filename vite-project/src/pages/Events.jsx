// g

import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


export default function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
 

  const loadEvents = () => {
    api.get("/events").then(res => setEvents(res.data));
  };

  useEffect(() => {
    loadEvents();
  }, []); 

  const deleteEvent = (id) => {
    api.delete(`/events/${id}`).then(loadEvents);
  };

  const Func =()=>{
    navigate("/dashboard")
  }

  return (
    <div className = "part">
      <h2>Events</h2>

      {events.map(e => (
        <div key={e.id}>
          <h4>{e.title}</h4>
          <p>{e.date}</p>
          <button onClick={() => deleteEvent(e.id)}>Delete</button> <br /> <br />
          <button onClick={Func}>Check, Finally how many events is here  (count?)</button>
        </div>
      ))}
    </div>
  );
}
