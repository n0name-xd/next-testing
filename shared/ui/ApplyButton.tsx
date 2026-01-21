import { Loader } from "./Loader";

interface IApplyButtonProps {
  apply: () => void;
  text: string;
  isLoading: boolean;
  disabled: boolean;
}

export const ApplyButton: React.FC<IApplyButtonProps> = ({
  text,
  isLoading,
  apply,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={apply}
      className="disabled:border-gray-700 disabled:cursor-not-allowed border-2 border-amber-500 rounded-3xl px-6 py-1 mt-6 cursor-pointer text-2xl hover:bg-[#FE9A00] disabled:bg-gray-200 min-h-11 min-w-46.25"
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
};
