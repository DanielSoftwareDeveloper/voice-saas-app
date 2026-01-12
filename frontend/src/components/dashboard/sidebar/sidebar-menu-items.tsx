"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FolderOpen, Home, Settings, Wand2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SidebarMenuItems() {
  const path = usePathname();

  let items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      active: false,
    },
    {
      title: "Create",
      url: "/dashboard/create",
      icon: Wand2,
      active: false,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: FolderOpen,
      active: false,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      active: false,
    },
  ];

  items = items.map((item) => ({
    ...item,
    active: path === item.url,
  }));

  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.active}>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}
