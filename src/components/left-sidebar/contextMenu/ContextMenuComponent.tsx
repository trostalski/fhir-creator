import { createPortal } from "react-dom";
interface ContextMenuProps {
  x: number;
  y: number;
}

export default function ContextMenuComponent(props: ContextMenuProps) {
  // return createPortal(
  return (
    <div
      className={`rounded border-2 absolute left-[${props.x}px] top-[${props.y}px] z-50`}
    >
      Context menu
    </div>
    // document.body
    // );
  );
}
