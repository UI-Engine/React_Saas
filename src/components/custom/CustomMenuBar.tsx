import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Settings,
  User,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Home,
  FileText,
  Users,
  BarChart3,
  Cog,
  HelpCircle,
  Star,
  Zap,
} from "lucide-react";

export interface CustomMenuBarProps {
  className?: string;
  variant?: "default" | "minimal" | "enterprise";
  items: MenuItem[];
  onItemClick?: (item: MenuItem) => void;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
  showSearch?: boolean;
  showNotifications?: boolean;
  showUserMenu?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role: string;
  };
  notifications?: NotificationItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  status?: "new" | "beta" | "deprecated";
  disabled?: boolean;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: Date;
  read: boolean;
}

const CustomMenuBar = React.forwardRef<HTMLDivElement, CustomMenuBarProps>(
  (
    {
      className,
      variant = "default",
      items,
      onItemClick,
      analytics,
      showSearch = true,
      showNotifications = true,
      showUserMenu = true,
      user,
      notifications = [],
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [unreadNotifications] = useState(
      notifications.filter((n) => !n.read).length
    );

    const handleItemClick = (item: MenuItem) => {
      if (item.disabled) return;

      // Analytics tracking
      if (item.analytics) {
        try {
          console.log("Menu Item Clicked:", item.analytics.event, {
            ...item.analytics.properties,
            item_id: item.id,
            item_label: item.label,
          });
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }

      if (analytics) {
        try {
          console.log("Menu Analytics Event:", analytics.event, {
            ...analytics.properties,
            item_id: item.id,
            item_label: item.label,
          });
        } catch (error) {
          console.error("Analytics error:", error);
        }
      }

      if (onItemClick) {
        onItemClick(item);
      }
    };

    const getStatusBadge = (status?: string) => {
      if (!status) return null;

      switch (status) {
        case "new":
          return (
            <Badge variant="default" className="ml-2 text-xs">
              New
            </Badge>
          );
        case "beta":
          return (
            <Badge variant="secondary" className="ml-2 text-xs">
              Beta
            </Badge>
          );
        case "deprecated":
          return (
            <Badge variant="destructive" className="ml-2 text-xs">
              Deprecated
            </Badge>
          );
        default:
          return null;
      }
    };

    const renderMenuItem = (item: MenuItem) => {
      if (item.children && item.children.length > 0) {
        return (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuTrigger
              className={cn(
                "flex items-center gap-2",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              disabled={item.disabled}
            >
              {item.icon}
              {item.label}
              {getStatusBadge(item.status)}
              {item.badge && (
                <Badge
                  variant={item.badge.variant || "default"}
                  className="ml-2"
                >
                  {item.badge.text}
                </Badge>
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <NavigationMenuLink asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-3"
                        onClick={() => handleItemClick(child)}
                        disabled={child.disabled}
                      >
                        <div className="flex items-center gap-3">
                          {child.icon && (
                            <div className="flex-shrink-0">{child.icon}</div>
                          )}
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{child.label}</span>
                              {getStatusBadge(child.status)}
                              {child.badge && (
                                <Badge
                                  variant={child.badge.variant || "default"}
                                  className="text-xs"
                                >
                                  {child.badge.text}
                                </Badge>
                              )}
                            </div>
                            {child.href && (
                              <p className="text-sm text-muted-foreground">
                                {child.href}
                              </p>
                            )}
                          </div>
                        </div>
                      </Button>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }

      return (
        <NavigationMenuItem key={item.id}>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "flex items-center gap-2",
              item.disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            {item.label}
            {getStatusBadge(item.status)}
            {item.badge && (
              <Badge variant={item.badge.variant || "default"} className="ml-2">
                {item.badge.text}
              </Badge>
            )}
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    };

    const getVariantClasses = () => {
      switch (variant) {
        case "minimal":
          return "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60";
        case "enterprise":
          return "border-b bg-gradient-to-r from-background to-muted/20 shadow-sm";
        default:
          return "border-b bg-background";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full",
          getVariantClasses(),
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">UIEngine</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {items.map(renderMenuItem)}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              {showSearch && (
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <Search className="h-4 w-4" />
                </Button>
              )}

              {/* Notifications */}
              {showNotifications && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <Bell className="h-4 w-4" />
                      {unreadNotifications > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs"
                        >
                          {unreadNotifications}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-muted-foreground">
                        No notifications
                      </div>
                    ) : (
                      notifications.slice(0, 5).map((notification) => (
                        <DropdownMenuItem key={notification.id}>
                          <div className="flex items-start gap-3 w-full">
                            <div
                              className={cn(
                                "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                                {
                                  "bg-blue-500": notification.type === "info",
                                  "bg-green-500":
                                    notification.type === "success",
                                  "bg-yellow-500":
                                    notification.type === "warning",
                                  "bg-red-500": notification.type === "error",
                                }
                              )}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {notification.title}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {notification.message}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {notification.timestamp.toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))
                    )}
                    {notifications.length > 5 && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-center">
                          View all notifications
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              {/* User Menu */}
              {showUserMenu && user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-6 h-6 rounded-full"
                          />
                        ) : (
                          <User className="h-3 w-3" />
                        )}
                      </div>
                      <span className="hidden sm:block">{user.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                        <Badge variant="secondary" className="w-fit text-xs">
                          {user.role}
                        </Badge>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t">
              <div className="py-4 space-y-2">
                {items.map((item) => (
                  <div key={item.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => {
                        handleItemClick(item);
                        setIsMobileMenuOpen(false);
                      }}
                      disabled={item.disabled}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                        {getStatusBadge(item.status)}
                        {item.badge && (
                          <Badge variant={item.badge.variant || "default"}>
                            {item.badge.text}
                          </Badge>
                        )}
                      </div>
                    </Button>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Button
                            key={child.id}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-sm"
                            onClick={() => {
                              handleItemClick(child);
                              setIsMobileMenuOpen(false);
                            }}
                            disabled={child.disabled}
                          >
                            <div className="flex items-center gap-2">
                              {child.icon}
                              {child.label}
                              {getStatusBadge(child.status)}
                              {child.badge && (
                                <Badge
                                  variant={child.badge.variant || "default"}
                                  className="text-xs"
                                >
                                  {child.badge.text}
                                </Badge>
                              )}
                            </div>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

CustomMenuBar.displayName = "CustomMenuBar";

export { CustomMenuBar };
// export type { CustomMenuBarProps, MenuItem, NotificationItem };
