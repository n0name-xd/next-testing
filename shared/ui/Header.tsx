import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-amber-500 h-14 w-full">
      <div className="wrapper">
        <nav>
          <div className="flex gap-4 font-semibold text-2xl pt-2">
            <Link href={"/"}>
              <span className="nav_menu">{"Главная"}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
