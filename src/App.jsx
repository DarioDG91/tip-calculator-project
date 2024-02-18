import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    bill: "",
    tip: "",
    numberPeople: "",
  });

  const inputBillIsValid = userInput.bill > 0;

  const inputNumberPeopleIsValid = userInput.numberPeople > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserinput) => {
      return {
        ...prevUserinput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleClick(inputIdentifier, newValue) {
    setUserInput((prevUserinput) => {
      return {
        ...prevUserinput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handleResetClick() {
    setUserInput({
      bill: "",
      tip: "",
      numberPeople: "",
    });
  }

  return (
    <>
      <Header />
      <main className=" mx-auto bg-white sm:max-w-[57.5rem]  sm:flex sm:flex-row flex-col gap-10  justify-between p-8 rounded-3xl">
        <UserInput
          inputBillIsValid={inputBillIsValid}
          inputNumberPeopleIsValid={inputNumberPeopleIsValid}
          userInput={userInput}
          onChangeInput={handleChange}
          onClickInput={handleClick}
          className=" flex-1 p-4  flex flex-col gap-8 justify-between"
        />
        <Result
          onResetClick={handleResetClick}
          userInput={userInput}
          className=" flex-1 flex flex-col justify-between bg-veryDarkCyan p-8 rounded-2xl"
        />
      </main>
    </>
  );
}

export default App;
