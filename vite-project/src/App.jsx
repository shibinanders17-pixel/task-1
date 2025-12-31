import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events"
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

     

      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/events" element={<Events />} />
        
        <Route path="/dashboard" element={<Dashboard />}/>

        <Route path="/create" element={<CreateEvent />} />
     
      </Routes>
    </BrowserRouter>
  );
}




