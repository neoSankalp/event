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
            className="flex-none rounded-xl text-xl inline-block font-semibold"
          >
            <svg
              className="w-28 h-auto"
              viewBox="0 0 116 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                className="stroke-black"
                strokeWidth="2"
              />
              <path
                d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                className="stroke-black"
                strokeWidth="2"
              />
              <circle cx="13" cy="16.5214" r="5" className="fill-black" />
            </svg>
          </a>

          {/* Templates Dropdown */}
          <div className="ms-1 sm:ms-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="group relative flex justify-center items-center size-8 text-xs rounded-full text-gray-800 hover:bg-gray-100 focus:bg-gray-100">
                <ChevronDown className="size-4" />
                <span className="absolute -top-0.5 -end-0.5">
                  <span className="relative flex">
                    <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex size-2 bg-red-500 rounded-full" />
                  </span>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[450px] p-0">
                <Tabs defaultValue="free" className="w-full">
                  <div className="p-3 pb-0 flex border-b border-gray-200">
                    <TabsList className="h-auto p-0 bg-transparent">
                      <TabsTrigger
                        value="pro"
                        className="data-[state=active]:bg-transparent data-[state=active]:text-gray-800"
                      >
                        Pro
                      </TabsTrigger>
                      <TabsTrigger
                        value="free"
                        className="data-[state=active]:bg-transparent data-[state=active]:text-gray-800"
                      >
                        Free
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="pro">
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-sm">
                          Templates (12)
                        </span>
                        <a
                          href="#"
                          className="py-2 px-2.5 rounded-md text-[13px] bg-gray-800 text-white hover:bg-gray-900"
                        >
                          Purchase
                        </a>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {proTemplates.map((template, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="p-3 flex flex-col items-center gap-y-3 rounded-xl hover:bg-gray-100"
                          >
                            <img
                              src={template.img || "/placeholder.svg"}
                              alt={template.title}
                              width={112}
                              height={112}
                              className="rounded-lg shadow"
                            />
                            <p className="text-sm text-gray-800">
                              {template.title}
                            </p>
                            {template.badge && (
                              <span className="py-0.5 px-2 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full">
                                {template.badge}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="free">
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-sm">
                          Templates (5)
                        </span>
                        <a
                          href="#"
                          className="py-2 px-2.5 rounded-md text-[13px] bg-gray-800 text-white hover:bg-gray-900"
                        >
                          Free download
                        </a>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {freeTemplates.map((template, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="p-3 flex flex-col items-center gap-y-3 rounded-xl hover:bg-gray-100"
                          >
                            <img
                              src={template.img || "/placeholder.svg"}
                              alt={template.title}
                              width={112}
                              height={112}
                              className="rounded-lg shadow"
                            />
                            <p className="text-sm text-gray-800">
                              {template.title}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Button Group */}
        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100">
            Sign in
          </button>
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500">
            Hire us
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
              href="#"
              className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400"
            >
              Work
            </a>
            <a href="#" className="inline-block text-black hover:text-gray-600">
              Services
            </a>
            <a href="#" className="inline-block text-black hover:text-gray-600">
              About
            </a>
            <a href="#" className="inline-block text-black hover:text-gray-600">
              Careers
            </a>
            <a href="#" className="inline-block text-black hover:text-gray-600">
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
