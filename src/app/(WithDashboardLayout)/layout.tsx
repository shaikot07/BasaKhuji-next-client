"use client";

import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar";
import {
  // Breadcrumb,
  // BreadcrumbItem,
  // BreadcrumbLink,
  // BreadcrumbList,
  // BreadcrumbPage,
  // BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const {user}=useUser()
  const { user } = useUser(); // 🔁 get user from context/hook
  const userRole = user?.role ?? "tenant"; // fallback just in case
  return (
    <SidebarProvider>
      <AppSidebar  userRole={userRole}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1 " />
          </div>
        </header>
        <div className="p-4 pt-0 min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
