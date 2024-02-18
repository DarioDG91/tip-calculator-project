import ResultComponent from "./ResultComponent";
import { tipsCalculator, formatter } from "../util/tipCalculator";

export default function Result({ userInput, onResetClick, ...rest }) {
  const resultData = tipsCalculator(userInput);
  let tipAmount = formatter.format(resultData.tipAmount);
  let total = formatter.format(resultData.total);

  return (
    <div {...rest}>
      <div>
        <ResultComponent
          tot={userInput.numberPeople > 0 ? tipAmount : "$0.00"}
          title="Tip Amount"
        />
        <ResultComponent
          tot={userInput.numberPeople > 0 ? total : "$0.00"}
          title="Total"
        />
      </div>
      <button
        disabled={
          userInput.bill === "" &&
          userInput.numberPeople === "" &&
          userInput.tip === ""
        }
        onClick={() => onResetClick()}
        className=" text-veryDarkCyan bg-StrongCyan uppercase  w-full rounded-md py-2 text-xl disabled:opacity-10 reset-btn"
      >
        Reset
      </button>
    </div>
  );
}
