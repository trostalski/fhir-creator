import LeftSidebar from "./left-sidebar/LeftSidebar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <main className="flex flex-row pt-8 h-full"></main>
    </>
  );
}
