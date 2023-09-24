import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Coin, Converter, Home } from "./pages";
import News from "./pages/News";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/coins/:id" element={<Coin />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/converter" element={<Converter />}></Route>
    </Routes>
  );
}

export default App;
