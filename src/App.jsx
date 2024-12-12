import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TabsMenu from "./components/TabsMenu";
import Work from "./components/Work";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <TabsMenu/>
      <Work/>
    </div>
  );
}

export default App;
