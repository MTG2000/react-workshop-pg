import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesApp from "./components/GamesApp/GamesApp";
import TodosApp from "./components/TodosApp/TodosApp";
import Navbar from "./components/Navbar/Navbar";
import LoginApp from "./components/LoginApp/LoginApp";
import CounterApp from "./components/CounterApp/CounterApp";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter basename="/react-workshop-pg">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesApp />} />
          <Route path="/todos" element={<TodosApp />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/counter" element={<CounterApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
