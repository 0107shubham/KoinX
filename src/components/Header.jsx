import codexlogo from "../../public/codexlogo.svg";
import Menu from "../../public/menu.svg"; // Make sure this import is correct

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-[#171A26] flex justify-between shadow p-4 z-50">
    <img src={codexlogo} alt="Logo" className="h-10" />
    <img src={Menu} alt="Menu" className="h-10 w-10 md:hidden" />
  </header>
);

export default Header;
