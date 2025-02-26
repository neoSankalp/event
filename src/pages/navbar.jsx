"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const proTemplates = [
    { title: "Dashboard", img: "/placeholder.svg?height=200&width=200" },
    { title: "Shop", img: "/placeholder.svg?height=200&width=200" },
    {
      title: "Chat",
      img: "/placeholder.svg?height=200&width=200",
      badge: "+4",
    },
    // Add more pro templates as needed
  ];

  const freeTemplates = [
    { title: "Agency", img: "/placeholder.svg?height=200&width=200" },
    { title: "Personal", img: "/placeholder.svg?height=200&width=200" },
    { title: "Admin", img: "/placeholder.svg?height=200&width=200" },
    // Add more free templates as needed
  ];

  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
        {/* Logo Section */}
        <div className="lg:col-span-3 flex items-center">
          <a
            href="/"
            className="flex-none rounded-xl text-2xl inline-block font-semibold"
          >
            Knowledge360
          </a>
        </div>

        {/* Button Group */}
        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <button className="max-sm:hidden py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100">
            Sign in
          </button>
          <button className="max-sm:hidden py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500">
            Buy Ticket
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Navigation as */}
        <div
          className={cn(
            "basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            <a
              href="#events"
              className="inline-block text-black hover:text-[#84CC16] transition-all duration-150"
            >
              Events
            </a>
            <a
              href="#team"
              className="inline-block text-black hover:text-[#84CC16] transition-all duration-150"
            >
              Team
            </a>
            <a
              href="#contact"
              className="inline-block text-black hover:text-[#84CC16] transition-all duration-150"
            >
              Contact
            </a>
            <a>
              <button className="sm:hidden py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100">
                Sign in
              </button>
            </a>
            <a>
              <button className="sm:hidden py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500">
                Buy Ticket
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
