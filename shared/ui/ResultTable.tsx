interface IResultTableProps {
  tableResult: (string | undefined)[];
}

export const ResultTable: React.FC<IResultTableProps> = ({ tableResult }) => {
  return (
    <div className="mt-8 font-semibold text-4xl mb-10">
      Результаты анкетирования:
      <div className="text-2xl flex flex-col gap-2 mt-3 border border-black">
        {tableResult
          .filter((e) => e)
          .map((e, i) => (
            <div className="border-b border-black" key={i}>
              <div className="px-4 py-2">{e}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
