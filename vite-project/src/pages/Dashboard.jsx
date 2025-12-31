import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div className = "part">
      <h2>Dashboard</h2>
      <h3>Total Events: {events.length}</h3>
    </div>
  );
}
