import React from "react";

const ImportMenu = () => {
  return (
    <div className="bg-white top-6 right-0 p-2 text-md absolute w-24 shadow-xl rounded-md">
      <button className="hover:underline">Resource</button>
      <button className="hover:underline">Bundle</button>
      <button className="hover:underline">Profile</button>
    </div>
  );
};

export default ImportMenu;
