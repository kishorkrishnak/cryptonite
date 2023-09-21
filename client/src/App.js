import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Coin, Home, Tweets } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/coins/:id" element={<Coin />}></Route>
      <Route path="/tweets" element={<Tweets />}></Route>
    </Routes>
  );
}

export default App;
