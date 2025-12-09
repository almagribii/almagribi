import { ThemeToggle } from "./theme-toogle";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex bg-card justify-between items-center p-4 mt-4 shadow-xl rounded-full px-8 text-xs mx-2">
          <div className="mt-1 text-xl font-bold">
            <span className="text-foreground dark:text-foreground">
              <span className="hoverText text-hover-primary">A</span>
              <span className="hoverText text-hover-primary">l</span>
              <span className="hoverText text-hover-primary">m</span>
              <span className="hoverText text-hover-primary">a</span>
              <span className="hoverText text-hover-primary">g</span>
              <span className="hoverText text-hover-primary">r</span>
              <span className="hoverText text-hover-primary">i</span>
              <span className="hoverText text-hover-primary">b</span>
              <span className="hoverText text-hover-primary">i</span>
            </span>
          </div>{" "}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
