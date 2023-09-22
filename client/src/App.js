import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Coin, Home } from "./pages";
import News from "./pages/News";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/coins/:id" element={<Coin />}></Route>
      {/* <Route path="/tweets" element={<Tweets />}></Route> */}
      <Route path="/news" element={<News />}></Route>
    </Routes>
  );
}

export default App;
