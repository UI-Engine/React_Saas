import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import menuItems, { MenuItem } from "./menuItems";
import { Link, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SidebarComponent: React.FC = () => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const { open, openMobile } = useSidebar();
  const location = useLocation();

  // Check active state
  const isActive = (url?: string) => url && location.pathname.startsWith(url);

  // Toggle group state
  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  // Auto-open active groups
  useEffect(() => {
    const newOpenGroups: Record<string, boolean> = {};

    menuItems.forEach((item) => {
      if (item.children) {
        const hasActiveChild = item.children.some((child) =>
          isActive(child.url)
        );
        if (hasActiveChild) newOpenGroups[item.title] = true;
      }
    });

    setOpenGroups((prev) => ({ ...prev, ...newOpenGroups }));
  }, [location.pathname]);

  // Render menu items
  const renderItem = (item: MenuItem, isChild = false) => (
    <TooltipProvider key={item.title} delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarMenuItem className={isChild ? "pl-6" : ""}>
            <SidebarMenuButton
              asChild
              // active={isActive(item.url)}
              className="transition-colors"
            >
              <Link to={item.url || "#"} className="flex items-center gap-3">
                {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
                {(open || openMobile) && <span>{item.title}</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </TooltipTrigger>
        {(!open || openMobile) && (
          <TooltipContent side="right" align="start" className="ml-2">
            {item.title}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );

  // Render group items - FIXED ICON VISIBILITY
  const renderGroup = (group: MenuItem) => {
    const isOpen = openGroups[group.title] || false;
    const isGroupActive = group.children?.some((child) => isActive(child.url));

    return (
      <TooltipProvider key={group.title} delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarGroup>
              <Collapsible
                open={isOpen}
                onOpenChange={() => toggleGroup(group.title)}
              >
                <SidebarGroupLabel
                  // active={isGroupActive}
                  className="data-[active=true]:bg-muted"
                >
                  <CollapsibleTrigger asChild>
                    <div className="w-full flex items-center gap-3">
                      {/* ALWAYS SHOW THE ICON */}
                      {group.icon && (
                        <group.icon className="h-4 w-4 flex-shrink-0" />
                      )}

                      {/* SHOW TEXT ONLY WHEN NOT COLLAPSED */}
                      {(open || openMobile) && (
                        <>
                          <span className="flex-1 text-left">
                            {group.title}
                          </span>
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </>
                      )}
                    </div>
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                {/* SHOW CHILDREN ONLY WHEN NOT COLLAPSED */}
                {(open || openMobile) && (
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {group.children?.map((child) =>
                          renderItem(child, true)
                        )}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </SidebarGroup>
          </TooltipTrigger>

          {/* SHOW TOOLTIP WHEN COLLAPSED */}
          {!open && openMobile && (
            <TooltipContent side="right" align="start" className="ml-2">
              <div className="flex flex-col">
                <span className="font-medium">{group.title}</span>
                {group.children?.map((child) => (
                  <span key={child.title} className="text-muted-foreground">
                    {child.title}
                  </span>
                ))}
              </div>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="h-full flex flex-col">
        <div className="flex-1 overflow-y-auto py-4">
          <SidebarMenu className="gap-1">
            {menuItems.map((item) =>
              item.children ? renderGroup(item) : renderItem(item)
            )}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarComponent;
