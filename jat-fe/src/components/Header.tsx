import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header>
      {children}
      <div className="bg-primary text-textPrimary flex flex-col justify-center items-center p-10 text-center">
        <h1 className="mb-6 text-5xl font-bold">Job Application Tracker</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-solid border-2 border-textPrimary hover:opacity-70"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="/"
            role="button"
          >
            Show all jobs
          </a>
          <a
            className="inline-block rounded bg-red-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-solid border-2 border-textSecondary text-textSecondary hover:opacity-70"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="/add-application"
            role="button"
          >
            Add a new job application
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
