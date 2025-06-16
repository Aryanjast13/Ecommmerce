"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCartStore } from "@/stores/useCartStore";
import { useUserStore } from "@/stores/useUserStore";
import {
  Lock,
  ShoppingCart,
  User
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { user, logout }:any = useUserStore();
    const isAdmin = user?.role === "admin";
    const { cart } = useCartStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      {/* <div className="hidden md:block bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={14} />
                <span>support@store.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="#" className="hover:text-black transition-colors">
                Track Order
              </Link>
              <Link to="#" className="hover:text-black transition-colors">
                Help
              </Link>
              <Link to="#" className="hover:text-black transition-colors">
                Store Locator
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          {/* Column 1: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-2xl font-bold text-black hidden sm:block">
                SmartDrobe
              </span>
            </Link>
          </div>

          {/* Column 2: Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  Home
                </Link>
            </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:text-gray-600 transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column 3: User Actions */}
          <div className="flex items-center justify-end space-x-2">

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-black hover:bg-gray-100"
                >
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link to="/login">
                  {user ?
                    <DropdownMenuItem onClick={logout}>
                      Logout
                    </DropdownMenuItem> : <DropdownMenuItem >
                      Login
                    </DropdownMenuItem>}
                </Link>
                {!user && (
                  <Link to="/signup">
                    <DropdownMenuItem>Create Account</DropdownMenuItem>
                  </Link>
                )}
                <Link to="/profile">
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Shopping Cart */}
            {user && (
              <Link to={"/cart"}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative text-black hover:bg-gray-100"
                >
                  <ShoppingCart size={18} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-black text-white">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}

            {isAdmin && (
              <Link
                className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}
            {/* {user ? (
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-1 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )} */}

            {/* Mobile Menu */}
            {/* <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-black hover:bg-gray-100"
                >
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our store
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-6">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/"
                        className="block text-lg font-medium text-black hover:text-gray-600"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="space-y-2">
                        <span className="block text-lg font-medium text-black">
                          Categories
                        </span>
                        <ul className="ml-4 space-y-2">
                          <li>
                            <Link
                              to="/electronics"
                              className="block text-gray-600 hover:text-black"
                            >
                              Electronics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/clothing"
                              className="block text-gray-600 hover:text-black"
                            >
                              Clothing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/home"
                              className="block text-gray-600 hover:text-black"
                            >
                              Home & Garden
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/sports"
                              className="block text-gray-600 hover:text-black"
                            >
                              Sports
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/deals"
                        className="block text-lg font-medium text-black hover:text-gray-600"
                      >
                        Deals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="block text-lg font-medium text-black hover:text-gray-600"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block text-lg font-medium text-black hover:text-gray-600"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                 Mobile Search 
                <div className="mt-6">
                  <div className="flex">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      <Search size={16} />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>   */}
          </div>
        </div>
      </div>
    </header>
  );
}
