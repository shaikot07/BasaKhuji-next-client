"use client";
import { useState } from "react";
// import Logo from "@/assets/svgs/Logo";

import { Button } from "../ui/button";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import Logo from "@/assets/svgs/Logo";

export default function NavDashboard() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const menu = (
    <ul className="list-none flex flex-col md:flex-row gap-4">
      <li>
        <Link
          className="rounded-none text-black font-bold border-b-0 hover:!text-[#EA580C] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
          href={"/"}
        >
          Home
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#EA580C] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/allHouse"}
            >
              All Home
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#EA580C] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/aboutus"}
            >
              About us
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#EA580C] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/allHouse"}
            >
              All House
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#EA580C] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/aboutus"}
            >
              About us
            </Link>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <header className="border-b bg-background w-full sticky top-0 z-10">
      <div className="container flex justify-end items-center mx-auto h-16 px-5">
      

        {/* Right Icons & User Profile */}
        <nav className="flex gap-2">
          {user?.role === "landlord" && (
            <Link href="/landlord/dashboard/postRentalHouse">
              <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
                Post Rental House
              </Button>
            </Link>
          )}
          {user?.email ? (
            <>
              {/* <Link href="/create-shop">
                <Button className="rounded-full">Create Shop</Button>
              </Link> */}

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
                  <DropdownMenuItem>
                    <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>My Shop</DropdownMenuItem> */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button
                className="rounded-full border-2  hover:bg-orange-600 hover:text-white"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
