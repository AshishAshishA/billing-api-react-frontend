import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import ApiEndpoint from "./components/api-endpoint";
import Pricing from "./components/pricing";
import UseCases from "./components/use-cases";
import Navbar from "./components/navbar";
import Form from "./components/form";
import Home from "./components/home";
import Contact from "./components/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Form />
      <ApiEndpoint />
      <UseCases />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
