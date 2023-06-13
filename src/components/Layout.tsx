import { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import ExportModal from "./ExportModal";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header />
      <main className="flex flex-row pt-8 h-full">
        <LeftSidebar setCheckoutModalOpen={setCheckoutModalOpen} />
        {props.children}
      </main>
      {checkoutModalOpen && (
        <ExportModal
          isOpen={checkoutModalOpen}
          setIsOpen={setCheckoutModalOpen}
        />
      )}
    </>
  );
}
