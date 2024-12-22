export default function Header() {
    return (
      <div className="bg-black text-white px-12 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="hidden sm:block">
          <span>LOGO</span>
        </div>
  
        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-8">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
  