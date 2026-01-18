import Link from "next/link";
import { routesList } from "../routes";

export const Main = () => {
  return (
    <div>
      <h1 className="mt-8 text-3xl font-semibold">Тесты:</h1>
      <ul className="pt-6 text-3xl flex flex-col gap-3 ">
        {routesList?.map((e) => {
          return (
            <Link href={e.path} key={e.name}>
              <li className="nav_menu hover:bg-amber-100 border border-gray-400 px-6 py-2 rounded-4xl">
                {e.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
