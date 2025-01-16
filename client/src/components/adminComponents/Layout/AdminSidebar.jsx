import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconLogout2,
  IconSettings,
  IconUserBolt,
  IconBuildingBurjAlArab,
  IconSlideshow,
  IconCheckupList,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function AdminSidebar({ children }) {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add Resort",
      href: "/admin/add-resort",
      icon: (
        <IconBuildingBurjAlArab className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Add Slider",
      href: "/admin/set-silder-image",
      icon: (
        <IconSlideshow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "User Checkout Resort",
      href: "/admin/user-checkout-resort",
      icon: (
        <IconCheckupList className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Go Home",
      href: "/",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex w-full flex-col gap-1 bg-gradient-to-r from-[#0C1529] via-[#0A2339] to-[#19173B] m-0 p-0">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};


// Simple Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-indigo-500 to-blue-600 p-4 shadow-lg flex items-center justify-between">
      {/* Logo or Title */}
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-indigo-500 font-bold text-xl">A</span>
        </div>
        <h1 className="text-lg font-semibold text-white tracking-wide">
          Admin Panel
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-sm font-medium text-white hover:text-gray-200 transition"
        >
          Help
        </a>
        <a
          href="#"
          className="text-sm font-medium text-white hover:text-gray-200 transition"
        >
          Contact
        </a>
        <button className="px-4 py-2 bg-white text-indigo-500 font-medium text-sm rounded-md shadow-md hover:bg-gray-100 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

