import type { IVariant } from "@/shared/types";

interface IAnswersProps {
  variants: IVariant[];
  value: IVariant | undefined;
  setChecked: React.Dispatch<React.SetStateAction<IVariant | undefined>>;
}

export const Answers: React.FC<IAnswersProps> = ({
  variants,
  value,
  setChecked,
}) => {
  return (
    <div className="mt-6">
      {variants?.map((e, i) => {
        if (e.inputType === "checkbox") {
          return (
            <div
              key={i}
              className="flex gap-5 items-center mt-2 hover:text-[#FE9A00]"
            >
              <input
                type="checkbox"
                id={e.value.toString()}
                name={e.text}
                checked={value === e}
                onChange={() => setChecked(e)}
                className="w-5 h-5"
              />
              <label
                className="text-2xl underline font-semibold cursor-pointer"
                htmlFor={e.value.toString()}
              >
                {e.text}
              </label>
            </div>
          );
        }

        if (e.inputType === "text") {
          return (
            <div key={i} className="flex gap-5 items-center mt-2">
              <input
                type="text"
                name={e.text}
                value={value?.value}
                onChange={(el) => setChecked({ ...e, value: el.target.value })}
                className="border-2 border-gray-400 rounded-xl px-2 py-1 focus:border-[#FE9A00] outline-none"
              />
              <label
                className="text-2xl underline font-semibold cursor-pointer"
                htmlFor={e.value.toString()}
              >
                {e.text}
              </label>
            </div>
          );
        }
      })}
    </div>
  );
};
