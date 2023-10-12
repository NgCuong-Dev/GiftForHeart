import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import BirthDay from "./page/Birthday/BirthDay";
import Person from "./page/Person/Person";
import Heart from "./page/Heart/Heart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/person" element={<Person />} />
          <Route path="/birthday" element={<BirthDay />} />
          <Route path="/heart" element={<Heart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
