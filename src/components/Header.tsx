
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
  <header className="sticky top-0 z-50 bg-gradient-to-r from-primaryRed via-red-600 to-primaryRed shadow-2xl">
    <nav className="container flex items-center justify-between py-4 font-sans">
      <Logo />
      <ul className="flex items-center gap-8 text-white text-base font-extrabold tracking-wider">
        {menuItems.map((item, i) =>
          item.dropdown ? (
            <li className="relative group" key={item.label}>
              <button className="flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white/15 hover:scale-110 transition duration-150">
                {item.label}
                <span className="ml-1">&#9662;</span>
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-primaryRed font-bold rounded-lg shadow-2xl z-40 min-w-[190px] animate-fade-in ring-1 ring-primaryRed/20">
                {item.dropdown.map((sub: string) => (
                  <li key={sub}>
                    <a href="#" className="block px-4 py-3 hover:bg-primaryRed hover:text-white rounded transition">{sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.link} className="px-3 py-1 rounded-lg hover:bg-white/15 hover:scale-110 transition duration-150">{item.label}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
