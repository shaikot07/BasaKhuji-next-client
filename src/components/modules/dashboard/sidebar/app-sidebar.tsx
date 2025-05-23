/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react";
import {
  Bot,
  Map,
  Settings,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";


// const data = {
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "/user/dashboard",
//       icon: SquareTerminal,
//       isActive: true,
//     },
//     {
//       title: "Shoppping",
//       url: "/user/shop/products",
//       icon: Bot,
//       items: [
//         {
//           title: "Manage Products",
//           url: "/user/shop/products",
//         },
//         {
//           title: "Manage Categories",
//           url: "/user/shop/category",
//         },
//         {
//           title: "Manage Brands",
//           url: "/user/shop/brand",
//         },
//       ],
//     },

//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings,
//       items: [
//         {
//           title: "Profile",
//           url: "/profile",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// };

// Define role-based navigation

const navMenus: Record<string, { title: string; url: string; icon: any; isActive?: boolean; items?: { title: string; url: string }[] }[]> = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User Management",
      url: "/admin/dashboard",
      icon: Bot,
      items: [
        {
          title: "Manage users",
          url: "/admin/users",
        },
        
      ],
    },
    
    {
      title: "Settings",
      url: "/admin/profile",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/admin/profile",
        },
        {
          title: "Change Password",
          url: "/admin/changePassword",
        },
      ],
    },
  ],
  // --------lanload ----
  landlord: [
    {
      title: "Dashboard",
      url: "/landlord/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Manage Rentals House",
      url: "/landlord/dashboard/allRentalHousrLanload",
      icon: Map,
      items: [
        {
          title: "All Rental House ",
          url: "/landlord/dashboard/allRentalHousrLanload",
        },
        {
          title: "Post Rental House ",
          url: "/landlord/dashboard/postRentalHouse",
        },
        {
          title: "Manage Rental Request",
          url: "/landlord/dashboard/rentalRequest",
        },
        
      ],
    },
    // {
    //   title: "Tenants",
    //   url: "/landlord/tenants",
    //   icon: Frame,
    // },
    // {
    //   title: "agdums",
    //   url: "/landlord/tenants",
    //   icon: Frame,
    // },
    {
      title: "Settings",
      url: "/landlord/profile",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/landlord/profile",
        },
        {
          title: "Password Change",
          url: "/landlord/changePassword",
        },
      ],
    },
  ],
  // ----tenant------
  tenant: [
    {
      title: "Dashboard",
      url: "/tenant/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "My Rent",
          url: "/tenant/dashboard/myRequest",
         
        },
        // {
        //   title: "Support",
        //   url: "/tenant/support",
         
        // },
      ],
    },
   
    {
      title: "Settings",
      url: "/tenant/profile",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/tenant/profile",
        },
        {
          title: "Password Change",
          url: "/tenant/changePassword",
        },
      ],
    },
  ],
};

export function AppSidebar({ userRole, ...props}: React.ComponentProps<typeof Sidebar> & { userRole: "admin" | "landlord" | "tenant";}) {
  // const { user } = useUser();
  // const userRole = user?.role || "tenant"; // Default to "tenant" if no role is found
  const navItems = navMenus[userRole] || []; // Get the appropriate nav items based on userRole
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl"> Basa Khuji.com</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
