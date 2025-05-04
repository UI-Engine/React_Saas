import React, { useState } from "react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarCollapse,
} from "flowbite-react";
import menuItems, { MenuItem } from "./menuItems";

interface SidebarComponentProps {
  isCollapsed: boolean;
}

const isActiveMenu = (href: string | undefined): boolean => {
  if (!href) return false;
  return window.location.pathname.startsWith(href);
};

const SidebarComponent: React.FC<SidebarComponentProps> = ({ isCollapsed }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderMenuItems = (items: MenuItem[]): React.ReactNode =>
    items.map((item) => {
      if (item.children) {
        return (
          <SidebarCollapse
            key={item.label}
            icon={item.icon}
            label={item.label}
            open={openMenus[item.label]}
            onClick={() => toggleMenu(item.label)}
            className="sidebar-collapse-custom"
          >
            {renderMenuItems(item.children)}
          </SidebarCollapse>
        );
      }
      return (
        <SidebarItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          className={`sidebar-item-custom ${
            isActiveMenu(item.href) ? "active" : ""
          }`}
        >
          {item.label}
        </SidebarItem>
      );
    });

  const renderCollapsedMenu = (): React.ReactNode =>
    menuItems.map((item) => (
      <SidebarItem
        key={item.label}
        href={item.href}
        icon={item.icon}
        className="sidebar-collapsed-menu-custom"
        title={item.label}
      />
    ));

  return (
    <>
      <Sidebar aria-label="Collapsible Sidebar" className="sidebar">
        <SidebarItems className="items">
          <SidebarItemGroup>
            {isCollapsed ? renderCollapsedMenu() : renderMenuItems(menuItems)}
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
