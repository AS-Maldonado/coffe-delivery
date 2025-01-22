import { Outlet } from "react-router-dom";
import { Header } from "../../components/_layout/Header";

export function MainLayout() {
  return (
    <div className="mx-auto max-w-[1100px] px-4">
      <Header />
      <Outlet />
    </div>
  );
}
