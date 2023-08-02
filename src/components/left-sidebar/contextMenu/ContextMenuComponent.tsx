interface ContextMenuProps {
  x: number;
  y: number;
}

export default function ContextMenuComponent(props: ContextMenuProps) {
  return (
    <div
      className={`flex flex-col align-start rounded text-white border-2-black fixed bg-slate-500`}
      style={{ left: props.x, top: props.y }}
    >
      <button>Copy</button>
      <button>Cut</button>
      <button>Paste</button>
      <button>Edit</button>
      <button>Rename</button>
      <button>Export</button>
      <button>Delete</button>
    </div>
  );
}
