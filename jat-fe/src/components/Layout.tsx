import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header>
        <Navbar />
      </Header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
