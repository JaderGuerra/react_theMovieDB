import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="p-4 bg-cover bg-center h-screen bg-slate-700">
        {children}
      </div>
    </>
  );
};
