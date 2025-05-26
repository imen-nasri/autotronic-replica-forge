
import Logo from "./Logo";

const menuItems = [
  { label: "ACCUEIL", link: "#" },
  { label: "FEATURES", link: "#", dropdown: ["Simulateur", "Cartographie", "Diagnostics"] },
  { label: "SERVICES", link: "#", dropdown: ["Ethanol E85", "Conversion Flexfuel", "Suppression FAP/AdBlue"] },
  { label: "RÉALISATIONS", link: "#" },
  { label: "A PROPOS", link: "#" },
  { label: "CONTACTEZ NOUS", link: "#" }
];

const Header = () => (
  <header className="sticky top-0 z-50 bg-primaryRed w-full shadow-lg">
    <nav className="container flex items-center justify-between py-3 font-sans">
      <Logo />
      <ul className="flex items-center gap-6 text-white text-base font-semibold">
        {menuItems.map((item, i) =>
          item.dropdown ? (
            <li className="relative group" key={item.label}>
              <button className="flex items-center gap-1 hover:text-gray-200 transition">{item.label}
                <span className="ml-1">&#9662;</span>
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-primaryRed font-bold rounded shadow-lg z-30 min-w-[180px] animate-fade-in">
                {item.dropdown.map((sub: string) => (
                  <li key={sub}>
                    <a href="#" className="block px-4 py-2 hover:bg-primaryRed hover:text-white rounded transition">{sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.link} className="hover:text-gray-200 transition">{item.label}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
