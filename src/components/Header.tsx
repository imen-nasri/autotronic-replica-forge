
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
  <header className="sticky top-0 z-50 bg-primaryRed shadow-xl">
    <nav className="container flex items-center justify-between py-6">
      <Logo />
      <ul className="hidden lg:flex items-center gap-8 text-white text-sm font-black tracking-wider uppercase">
        {menuItems.map((item, i) =>
          item.dropdown ? (
            <li className="relative group" key={item.label}>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded transition-all duration-200">
                {item.label}
                <ChevronDown size={16} />
              </button>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-primaryRed font-bold rounded-lg shadow-2xl z-40 min-w-[200px] border-t-4 border-primaryRed">
                {item.dropdown.map((sub: string) => (
                  <li key={sub}>
                    <a href="#" className="block px-6 py-3 hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg">{sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.link} className="px-4 py-2 hover:bg-white/10 rounded transition-all duration-200">{item.label}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
);

export default Header;
