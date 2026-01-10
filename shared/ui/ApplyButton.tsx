interface IApplyButtonProps {
  apply: () => void;
  text: string;
}

export const ApplyButton: React.FC<IApplyButtonProps> = ({ text, apply }) => {
  return (
    <button
      onClick={apply}
      className="border-2 border-amber-500 rounded-3xl px-6 py-1 mt-6 cursor-pointer text-2xl hover:bg-[#FE9A00]"
    >
      {text}
    </button>
  );
};
