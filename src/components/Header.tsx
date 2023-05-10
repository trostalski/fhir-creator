import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiAncientGateFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row fixed top-0 w-full h-10 bg-blue-400 items-center text-white font-light px-4 z-10">
        <span> FHIR Creator</span>
        <span className="flex-grow"></span>
        <div className="flex flex-row gap-4">
          <a href="https://github.com/trostalski/fhir-creator" target="_blank">
            <AiFillGithub size={32} style={{ color: "white" }} />
          </a>
          <a href="http://whipples.io/" target="_blank">
            <RiAncientGateFill size={32} style={{ color: "white" }} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
