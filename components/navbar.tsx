import { ThemeToggle } from "./theme-toogle";

export const Navbar = () => {
  return (
    <div className="bg-[#DAB45D] w-full flex justify-between items-center p-2 mt-2 shadow-xl rounded-full px-8 text-xs">
      <div className="mt-1 hidden sm:block text-xs font-bold">
        <span className="text-foreground dark:text-foreground">
          <span className="hoverText text-hover-primary">A</span>

          <span className="hoverText text-hover-primary">l</span>

          <span className="hoverText text-hover-primary">m</span>

          <span className="hoverText text-hover-primary">a</span>

          <span className="hoverText text-hover-primary">g</span>
        </span>

        <span className="text-primary dark:text-primary">
          <span className="hoverText text-hover-light">r</span>

          <span className="hoverText text-hover-light">i</span>

          <span className="hoverText text-hover-light">b</span>
          <span className="hoverText text-hover-light">i</span>
        </span>
      </div>{" "}
      <div>
        <a href="">About</a>
        <a href="">About</a>
        <a href="">About</a>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};
