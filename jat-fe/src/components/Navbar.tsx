import { useState } from "react";
import { navData } from "../data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav
      className="relative flex w-full items-center justify-between bg-red-900 py-2 text-textPrimary shadow-lg hover:text-neutral-700 focus:text-neutral-700 md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="flex items-center">
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-5">
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>

        <div
          className={`${
            mobileMenuOpen ? "visible" : "hidden"
          } grow basis-[100%] items-center p-1 lg:!flex lg:basis-auto`}
          id="navbarSupportedContentY"
          data-te-collapse-item
        >
          <ul
            className="mr-auto flex flex-col lg:flex-row"
            data-te-navbar-nav-ref
          >
            {navData.map((navItem) => (
              <li
                className="mb-4 lg:mb-0 lg:pr-2"
                data-te-nav-item-ref
                key={navItem.link}
              >
                <a
                  className="uppercase block text-xs text-textSecondary hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href={navItem.link}
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
