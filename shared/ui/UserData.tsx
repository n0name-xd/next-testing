import { Dispatch, SetStateAction } from "react";
import { IUserData } from "../types";

interface IUserDataProps {
  commonUserData: IUserData;
  className?: string;
  setCommonUserData: Dispatch<SetStateAction<IUserData>>;
  applyUserData: () => void;
}

export const UserData: React.FC<IUserDataProps> = ({
  commonUserData,
  className,
  setCommonUserData,
  applyUserData,
}) => {
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold">Заполните данные о себе:</h2>
      <div className="mt-4">
        <label className="text-2xl font-semibold cursor-pointer">Фамилия</label>
        <br />
        <input
          type="text"
          value={commonUserData.surname ?? ""}
          onChange={(el) =>
            setCommonUserData((p) => ({ ...p, surname: el.target.value }))
          }
          className="border-2 border-gray-400 rounded-xl px-2 py-1 focus:border-[#FE9A00] outline-none mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-2xl font-semibold cursor-pointer">Имя</label>
        <br />
        <input
          type="text"
          value={commonUserData.name ?? ""}
          onChange={(el) =>
            setCommonUserData((p) => ({ ...p, name: el.target.value }))
          }
          className="border-2 border-gray-400 rounded-xl px-2 py-1 focus:border-[#FE9A00] outline-none mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-2xl font-semibold cursor-pointer">
          Отчество
        </label>
        <br />
        <input
          type="text"
          value={commonUserData.patronymic ?? ""}
          onChange={(el) =>
            setCommonUserData((p) => ({ ...p, patronymic: el.target.value }))
          }
          className="border-2 border-gray-400 rounded-xl px-2 py-1 focus:border-[#FE9A00] outline-none mt-2"
        />
      </div>
      <div className="mt-4">
        <label className="text-2xl font-semibold cursor-pointer">Пол</label>
        <div className="">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={"gender-male"}
              name={"gender-male"}
              checked={commonUserData.gender === "male"}
              onChange={(e) =>
                setCommonUserData((p) => ({
                  ...p,
                  gender: e.target.checked ? "male" : undefined,
                }))
              }
              className="w-5 h-5 mt-2"
            />
            <label className="text-xl cursor-pointer" htmlFor="gender-male">
              Мужской
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={"gender-female"}
              name={"gender-female"}
              checked={commonUserData.gender === "female"}
              onChange={(e) =>
                setCommonUserData((p) => ({
                  ...p,
                  gender: e.target.checked ? "female" : undefined,
                }))
              }
              className="w-5 h-5 mt-2"
            />
            <label className="text-xl cursor-pointer" htmlFor="gender-female">
              Женский
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-2xl font-semibold cursor-pointer">
          Дата рождения
        </label>
        <br />
        <input
          max={new Date().toISOString().split("T")[0]}
          type="date"
          value={commonUserData.dateOfBirth ?? ""}
          onChange={(el) => {
            setCommonUserData((p) => ({ ...p, dateOfBirth: el.target.value }));
          }}
          className="border-2 border-gray-400 rounded-xl px-2 py-1 focus:border-[#FE9A00] outline-none mt-2 text-xl"
        />
      </div>
      <button
        onClick={applyUserData}
        className="border-2 border-amber-500 rounded-3xl px-6 py-1 mt-6 cursor-pointer text-2xl hover:bg-[#FE9A00]"
      >
        Подтвердить и перейти к тесту
      </button>
      <div>
        {commonUserData.error && (
          <span className="text-red-500 font-semibold text-2xl underline">
            Необходимо заполнить все поля
          </span>
        )}
      </div>
    </div>
  );
};
