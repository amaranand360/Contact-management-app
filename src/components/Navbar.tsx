import React from "react";
import { Link } from "react-router-dom";

const Navbar:React.ComponentType = () => {
  return (
    <div className="bg-gray-700 py-2">
      <nav className="bg-gray-700">
        <div className="container mx-auto">
          <Link to={"/"} className="text-white text-lg font-bold ml-5">
          Contact management app
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
