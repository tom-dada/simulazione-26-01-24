import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </ChakraProvider>
  );
}

export default App;
