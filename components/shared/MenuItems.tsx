import { siteConfig } from "@/config/site";
import React from "react";
import SidebarLinkActive from "./SidebarLinkActive";

const MenuItems = () => {
  return (
    <div className="flexBetween flex-col md:flex-row gap-6">
      {siteConfig.navItems.map((item, index) => (
        <SidebarLinkActive key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuItems;
