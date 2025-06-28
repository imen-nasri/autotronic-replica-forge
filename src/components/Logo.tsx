
const Logo = () => (
  <div className="flex items-center space-x-3">
    <svg width="52" height="52" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
      <rect width="64" height="48" rx="8" fill="#fff"/>
      <path d="M15 32c10-20 24-20 34 0" stroke="#eab308" strokeWidth="3" fill="none"/>
      <circle cx="19" cy="36" r="3" fill="#eab308"/>
      <circle cx="45" cy="36" r="3" fill="#eab308"/>
      <text x="32" y="20" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="900" fontFamily="Montserrat">MH</text>
      <text x="32" y="30" textAnchor="middle" fill="#eab308" fontSize="7" fontWeight="bold" fontFamily="Montserrat">AUTO</text>
    </svg>
    <span className="font-black text-2xl text-white tracking-wider drop-shadow-lg">MH AUTO Performance</span>
  </div>
);

export default Logo;
