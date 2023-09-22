import "react-alice-carousel/lib/alice-carousel.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import CryptoContext from "./CryptoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
const globalTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Arial",
    },
  },
});
root.render(
  <CryptoContext>
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </CryptoContext>
);
