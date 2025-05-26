
const Logo = () => (
  <div className="flex items-center space-x-2">
    {/* Nouveau logo temporaire */}
    <svg width="48" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="48" rx="10" fill="#e53935"/>
      <path d="M15 32c10-20 24-20 34 0" stroke="#fff" strokeWidth="2.5" fill="none"/>
      <circle cx="19" cy="36" r="3" fill="#fff"/>
      <circle cx="45" cy="36" r="3" fill="#fff"/>
      <text x="32" y="25" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="Montserrat">AUTO</text>
      <text x="32" y="37" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="Montserrat">PERF</text>
    </svg>
    <span className="font-extrabold text-xl text-white tracking-widest">Autotronic</span>
  </div>
);

export default Logo;
