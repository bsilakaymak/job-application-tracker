import { ReactNode } from "react";
import { footerContent } from "../data";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-between bg-textSecondary h-auto">
      <Header>
        <Navbar />
      </Header>
      <main className="p-4 md:px-10 min-h-[calc(100vh-400px)] md:p-8">
        {children}
      </main>
      <Footer footerContent={footerContent} />
    </div>
  );
};

export default Layout;
