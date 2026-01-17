"use client";

export const Header = () => {
  return (
    <header className="bg-amber-500 h-14 w-full">
      <div className="wrapper">
        <nav>
          <div className="flex gap-4 font-semibold text-2xl pt-2">
            <button onClick={() => (location.href = "/")}>
              <span className="nav_menu">{"Главная"}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
