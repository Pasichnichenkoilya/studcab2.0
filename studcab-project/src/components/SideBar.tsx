import { FC, useRef } from "react";

interface SideBarProps {
  setSideBarOpen: (value: boolean) => void;
}

const SideBar: FC<SideBarProps> = ({ setSideBarOpen }) => {
  const bgRef = useRef<HTMLDivElement>(null);

  const onBgClick = (e: React.MouseEvent<HTMLElement>) => {
    if (bgRef.current && e.target === bgRef.current) {
      setSideBarOpen(false);
    }
  };

  return (
    <div
      ref={bgRef}
      onClick={onBgClick}
      className="absolute w-full h-full bg-black/80">
      <div className="h-full w-[15rem] bg-soft-white"></div>
    </div>
  );
};

export default SideBar;
