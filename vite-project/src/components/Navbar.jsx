import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Event Management Dashboard</div>

      <ul className="nav-links">
        
        <li>
          <Link to="/create">CreateEvent</Link>
        </li>
        
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        
        <li>
          <Link to="/"> <button>Login</button></Link>
        </li>
        

      </ul>
    </nav>
  );
}
