import { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import ExportModal from "./ExportModal";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>FHIR Creator | Create and Analyze your FHIR Data</title>
        <meta
          name="description"
          content="Upload your FHIR data or create Resources from scratch. Analyze your data with the FHIR Creator."
          key="desc"
        />
        <meta property="og:title" content="FHIR Creator" key="title" />
        <meta property="og:url" content="https://fhir-creator.vercel.app/" />
        <meta
          property="og:description"
          content="Upload your FHIR data or create Resources from scratch. Analyze your data with the FHIR Creator."
        />
      </Head>
      <div className="w-screen h-screen overflow-hidden">
        <Header />
        <main className="flex flex-row h-full w-full overflow-hidden">
          <LeftSidebar setCheckoutModalOpen={setCheckoutModalOpen} />
          {props.children}
        </main>
        {checkoutModalOpen && (
          <ExportModal
            isOpen={checkoutModalOpen}
            setIsOpen={setCheckoutModalOpen}
          />
        )}
        <footer></footer>
      </div>
    </div>
  );
}
