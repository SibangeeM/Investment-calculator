import { useState } from "react";
import Header from "./Components/Header";
import Result from "./Components/Result";
import Userform from "./Components/Userform";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  });
  const inputIsValid = userInput.duration > 0;
  return (
    <>
      {" "}
      <Header />
      <Userform userInput={userInput} setUserInput={setUserInput} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please Enter a valid duration.</p>
      )}
    </>
  );
}

export default App;
