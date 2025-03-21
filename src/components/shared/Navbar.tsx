"use client";
import { useState } from "react";
import Logo from "@/assets/svgs/Logo";
import { Button } from "../ui/button";
import { LogOut, Menu, ShoppingBag, X } from "lucide-react";
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

export default function Navbar() {
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
          className="rounded-none text-black font-bold border-b-0 hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
          href={"/"}
        >
          Home
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/allHouse"}
            >
              All Home
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/aboutUs"}
            >
              About us
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/allHouse"}
            >
              All House
            </Link>
          </li>
          <li>
            <Link
              className="rounded-none text-black font-bold hover:!text-[#F2355F] hover:border-[#F2355F] hover:border-b-2 transition duration-300 focus:!text-[#F2355F]"
              href={"/aboutUs"}
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
      <div className="container flex justify-between items-center mx-auto h-16 px-5">
        <Link href="/">
          <h1 className="text-2xl font-black flex items-center">
            <Logo />
            Basa Khuji
          </h1>
        </Link>

        {/* Nav Menu */}
        <div className="hidden md:flex">{menu}</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col items-start md:hidden">
            {/* Close Button Inside Menu */}
            <button
              className="self-end p-2 mb-4 text-gray-700 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
            {menu}
          </div>
        )}

        {/* Right Icons & User Profile */}
        <nav className="flex gap-2">
          <Link href="/landlord/dashboard/allRentalHousrLanload">
            <Button className="rounded-full">Post Rental House</Button>
          </Link>
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
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
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
              <Button className="rounded-full" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
