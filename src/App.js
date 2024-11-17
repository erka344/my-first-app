import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import './App.css';
import Profile from './Profile';
import Counter from './Counter';
import ToDoList from "./ToDoList";
import ColorChanger from "./ColorChanger";

function App() {
  return (
    <Router>
      <nav>
      <h1>React Lesson</h1>
          <Link to="/profile">Profile</Link> | 
          <Link to="/counter">Counter</Link> | 
          <Link to="/todolist">To-Do List</Link> | 
          <Link to="/colorchanger">Color Changer</Link>
      </nav>
      <Routes>
          <Route path="/profile" element={<Profile name="Dorj" age="10" bio="eregtei" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/colorchanger" element={<ColorChanger />} />
        </Routes>
    </Router>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);