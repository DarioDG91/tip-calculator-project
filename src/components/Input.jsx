export default function Input({
  id,
  label,
  type,
  icon,
  value,
  onChange,
  validationMessage,
  ...rest
}) {
  let labelClasses =
    " text-darkGrayishCyan  text-sm block text-xs font-bold tracking-wide";
  let inputClasses =
    "w-full px-3 py-2 leading-tight  border rounded shadow text-right focus:outline-StrongCyan ";

  return (
    <div>
      <div className="flex justify-between mb-2 ">
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
        {validationMessage}
      </div>
      <div className=" relative">
        {icon}
        <input
          onChange={onChange}
          className={inputClasses}
          placeholder="0"
          id={id}
          type={type}
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
}
