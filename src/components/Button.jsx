export default function Button({onClickInput, text}){
    return (
        <button onClick={() => onClickInput('tip', text)}  className=" text-white w-28 bg-veryDarkCyan rounded-md py-2 hover:bg-StrongCyan hover:text-veryDarkCyan">{text}%</button>
    )
}