export default function ResultComponent({ title, tot }) {
  return (
    <div className="flex ">
      <p className="flex flex-col text-sm grow mb-12 text-white">
        <span>{title}</span>
        <span className=" text-xs text-darkGrayishCyan">/ person</span>
      </p>
      <p className=" text-StrongCyan sm:text-5xl text-3xl">{tot}</p>
    </div>
  );
}
