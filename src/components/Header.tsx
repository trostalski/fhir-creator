import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row fixed top-0 w-full h-10 bg-blue-400 items-center text-white font-light px-4 z-10">
        FHIR Creator
      </nav>
    </header>
  );
};

export default Header;
