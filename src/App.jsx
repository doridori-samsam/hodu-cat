import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
