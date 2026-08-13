import { Outlet, useLocation } from "react-router";
import { Header } from "@/components/common/header";
import { cn } from "@/lib/cn";

export function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-page text-fg flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <div key={pathname} className={cn(pathname !== "/" && "page-enter")}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
