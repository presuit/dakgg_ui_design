import { ReactNode } from "react";

interface ILayout {
  children?: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return <div className="w-full min-h-screen bg-slate-100">{children}</div>;
};

export default Layout;
