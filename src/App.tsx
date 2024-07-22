import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
import { useState } from "react";
import IsCompletedContext from "./utils/isCompletedContext";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <IsCompletedContext.Provider value={{isCompleted, setIsCompleted}}>
      <MainPage />
    </IsCompletedContext.Provider>
  );
}

export default App;
