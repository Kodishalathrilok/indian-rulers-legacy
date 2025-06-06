
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-lg bg-heritage-gold/10 border border-heritage-gold/20 group-hover:bg-heritage-gold/20 transition-colors duration-300">
            <Crown className="h-6 w-6 text-heritage-gold" />
          </div>
          <span className="font-playfair font-semibold text-lg text-foreground group-hover:text-heritage-gold transition-colors duration-300">
            Chronology
          </span>
        </Link>

        {/* Navigation */}
        <nav>
          <Link 
            to="/about" 
            className="nav-link text-sm font-medium"
          >
            About Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
