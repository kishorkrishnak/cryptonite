import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Coin, Home } from "./pages";
function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins/:id" element={<Coin />}></Route>
    </Routes>
  );
}

export default App;
