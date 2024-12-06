// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/mobileResponsive.css";
import App from "./App";

//Component added here!!
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
