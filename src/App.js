import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import Screen from "./components/Screen";
import "./App.css";
import Keypad from "./components/Keypad";

function App() {
  const [value, setValue] = useState("0");
  return (
    <Card className="calculator" style={{
      backgroundColor: 'rgb(71, 69, 69)',
    }}>
      <CardContent className="screenContainer">
        <Screen display={value} setDisplay={setValue} />
      </CardContent>
      <CardContent className="keypadContainer">
        <Keypad value={value} setValue={setValue} />
      </CardContent>
    </Card>
  );
}

export default App;
