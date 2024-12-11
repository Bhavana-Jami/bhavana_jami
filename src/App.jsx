import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TabsMenu from "./components/TabsMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <TabsMenu/>
    </div>
  );
}

export default App;
