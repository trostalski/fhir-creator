import React from "react";
import "react-tooltip/dist/react-tooltip.css";

import Link from "next/link";

import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <Link href={"/creator"}>
          <button className="bg-blue-500 text-white text-lg font-semibold py-4 px-8 rounded-lg mb-4 w-64 hover:bg-blue-700">
            Create Bundle from Scratch
          </button>
        </Link>
        <Link href={"/annotator"}>
          <button className="bg-green-500 text-white text-lg font-semibold py-4 px-8 rounded-lg w-64 hover:bg-green-700">
            Create Bundle from Text
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
