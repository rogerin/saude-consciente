
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <main className="flex-1 p-6">
        <SidebarTrigger className="mb-4" />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
