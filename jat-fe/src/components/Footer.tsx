const Footer = ({ footerContent }: { footerContent: string }) => {
  return (
    <footer className="mt-5 p-3 bg-red-900 w-screen h-15 px-6 py-8 text-center text-textSecondary">
      {footerContent}
    </footer>
  );
};

export default Footer;
