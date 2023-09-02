import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiAncientGateFill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row fixed top-0 w-full h-10 bg-blue-400 items-center text-white font-light px-4 z-10">
        <h1> FHIR Creator</h1>
        <span className="flex-grow"></span>
        <div className="flex flex-row gap-4">
          <Link href={"/"}>Home</Link>
          <a href="https://github.com/trostalski/fhir-creator" target="_blank">
            <AiFillGithub size={32} style={{ color: "white" }} />
          </a>
          <a href="https://healthnerd.solutions" target="_blank">
            <RiAncientGateFill size={32} style={{ color: "white" }} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
