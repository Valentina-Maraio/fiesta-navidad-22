import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Friends from "./view/Friends";
import Activities from "./view/Activities";
import Food from "./view/Food";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/friends" element={<Friends />}></Route>
              <Route path="/activities" element={<Activities />}></Route>
              <Route path="/food" element={<Food />}></Route>
            </Routes>
          </Router>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
