import { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="p-4 bg-cover bg-center dark:bg-slate-700">
        {children}
      </main>
    </>
  );
};
