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
  CustomMenuBar,
  MenuItem,
  NotificationItem,
} from "@/components/custom/CustomMenuBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Home,
  FileText,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  Star,
  Zap,
  Bell,
  Search,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const MenuBarPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  // Sample menu items for demonstrations
  const sampleMenuItems: MenuItem[] = [
    {
      id: "home",
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: "products",
      label: "Products",
      icon: <FileText className="h-4 w-4" />,
      children: [
        {
          id: "overview",
          label: "Overview",
          href: "/products",
          icon: <BarChart3 className="h-4 w-4" />,
        },
        {
          id: "features",
          label: "Features",
          href: "/products/features",
          icon: <Star className="h-4 w-4" />,
          status: "new",
        },
        {
          id: "pricing",
          label: "Pricing",
          href: "/products/pricing",
          icon: <Zap className="h-4 w-4" />,
          badge: { text: "Pro", variant: "secondary" },
        },
      ],
    },
    {
      id: "team",
      label: "Team",
      href: "/team",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      status: "beta",
    },
  ];

  const sampleNotifications: NotificationItem[] = [
    {
      id: "1",
      title: "New feature available",
      message: "Check out our latest dashboard improvements",
      type: "info",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false,
    },
    {
      id: "2",
      title: "Payment successful",
      message: "Your subscription has been renewed",
      type: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: false,
    },
    {
      id: "3",
      title: "System maintenance",
      message: "Scheduled maintenance in 2 hours",
      type: "warning",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      read: true,
    },
  ];

  const sampleUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  };

  const handleMenuItemClick = (item: MenuItem) => {
    console.log("Menu item clicked:", item);
  };

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Menu Bar</h1>
          <p className="text-muted-foreground">
            Displays a navigation menu with dropdowns, notifications, and user
            actions. Menu bars are used for primary navigation.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Menu Bar</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Menu Bar</TabsTrigger>
            <TabsTrigger value="props">Props & Types</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsContent value="shadcn" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui Navigation Menu</CardTitle>
                <CardDescription>
                  Standard navigation menu with dropdowns and basic
                  functionality.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Navigation Menu */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Basic Navigation Menu
                  </h3>
                  <div className="border rounded-lg p-4">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Home
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Products
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              <li>
                                <NavigationMenuLink asChild>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start h-auto p-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <BarChart3 className="h-4 w-4" />
                                      <div>
                                        <div className="font-medium">
                                          Overview
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                          Get started with our products
                                        </p>
                                      </div>
                                    </div>
                                  </Button>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start h-auto p-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Star className="h-4 w-4" />
                                      <div>
                                        <div className="font-medium">
                                          Features
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                          Explore our feature set
                                        </p>
                                      </div>
                                    </div>
                                  </Button>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Team
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Settings
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>

                {/* With Icons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">With Icons</h3>
                  <div className="border rounded-lg p-4">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            <FileText className="mr-2 h-4 w-4" />
                            Products
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4">
                              <li>
                                <NavigationMenuLink asChild>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start h-auto p-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <BarChart3 className="h-4 w-4" />
                                      <div>
                                        <div className="font-medium">
                                          Overview
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                          Product overview and analytics
                                        </p>
                                      </div>
                                    </div>
                                  </Button>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start h-auto p-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Star className="h-4 w-4" />
                                      <div>
                                        <div className="font-medium">
                                          Features
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                          Explore product features
                                        </p>
                                      </div>
                                    </div>
                                  </Button>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <Users className="mr-2 h-4 w-4" />
                            Team
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Code Example */}
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Basic navigation menu
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <li>
            <NavigationMenuLink asChild>
              <Button variant="ghost" className="w-full justify-start">
                Overview
              </Button>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Menu Bar Section */}
          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Menu Bar</CardTitle>
                <CardDescription>
                  Enhanced menu bar component with notifications, user menu,
                  analytics tracking, and enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Default Variant */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Default Variant</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <CustomMenuBar
                      items={sampleMenuItems}
                      onItemClick={handleMenuItemClick}
                      user={sampleUser}
                      notifications={sampleNotifications}
                      analytics={{
                        event: "menu_interaction",
                        properties: { component: "custom_menu_bar" },
                      }}
                    />
                    <div className="p-8 text-center text-muted-foreground">
                      <p>Page content would go here</p>
                      <p className="text-sm">
                        The menu bar is sticky and stays at the top
                      </p>
                    </div>
                  </div>
                </div>

                {/* Minimal Variant */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Minimal Variant</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <CustomMenuBar
                      variant="minimal"
                      items={sampleMenuItems.slice(0, 3)}
                      onItemClick={handleMenuItemClick}
                      showSearch={false}
                      showNotifications={false}
                      analytics={{
                        event: "minimal_menu_interaction",
                        properties: { variant: "minimal" },
                      }}
                    />
                    <div className="p-8 text-center text-muted-foreground">
                      <p>Minimal menu bar with backdrop blur effect</p>
                    </div>
                  </div>
                </div>

                {/* Enterprise Variant */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enterprise Variant</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <CustomMenuBar
                      variant="enterprise"
                      items={sampleMenuItems}
                      onItemClick={handleMenuItemClick}
                      user={sampleUser}
                      notifications={sampleNotifications}
                      analytics={{
                        event: "enterprise_menu_interaction",
                        properties: {
                          variant: "enterprise",
                          user_role: "admin",
                        },
                      }}
                    />
                    <div className="p-8 text-center text-muted-foreground">
                      <p>Enterprise menu bar with gradient background</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Responsive */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Mobile Responsive</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="w-full max-w-sm mx-auto">
                      <CustomMenuBar
                        items={sampleMenuItems}
                        onItemClick={handleMenuItemClick}
                        user={sampleUser}
                        notifications={sampleNotifications}
                        analytics={{
                          event: "mobile_menu_interaction",
                          properties: { device: "mobile" },
                        }}
                      />
                      <div className="p-4 text-center text-muted-foreground">
                        <p className="text-sm">
                          Mobile view - try the hamburger menu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Demo */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Features Demo</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Status Badges
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="default">New</Badge>
                            <span className="text-sm">
                              New feature indicator
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Beta</Badge>
                            <span className="text-sm">
                              Beta feature indicator
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive">Deprecated</Badge>
                            <span className="text-sm">
                              Deprecated feature indicator
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          Notifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-sm">Info notifications</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-sm">
                              Success notifications
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                            <span className="text-sm">
                              Warning notifications
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-sm">Error notifications</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Code Example */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Menu Bar Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomMenuBar, MenuItem, NotificationItem } from "@/components/custom/CustomMenuBar"

// Menu items configuration
const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "products",
    label: "Products",
    icon: <FileText className="h-4 w-4" />,
    children: [
      {
        id: "overview",
        label: "Overview",
        href: "/products",
        icon: <BarChart3 className="h-4 w-4" />,
      },
      {
        id: "features",
        label: "Features",
        href: "/products/features",
        icon: <Star className="h-4 w-4" />,
        status: "new",
      },
    ],
  },
];

// Notifications
const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "New feature available",
    message: "Check out our latest improvements",
    type: "info",
    timestamp: new Date(),
    read: false,
  },
];

// User data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Admin",
};

// Usage
<CustomMenuBar
  variant="enterprise"
  items={menuItems}
  onItemClick={(item) => console.log('Clicked:', item)}
  user={user}
  notifications={notifications}
  analytics={{
    event: 'menu_interaction',
    properties: { component: 'custom_menu_bar' }
  }}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Props & Types Section */}
          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* shadcn/ui Props */}
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Navigation Menu Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">NavigationMenu</h4>
                      <p className="text-sm text-muted-foreground">
                        Root container for navigation menu
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">NavigationMenuList</h4>
                      <p className="text-sm text-muted-foreground">
                        Container for navigation items
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">NavigationMenuItem</h4>
                      <p className="text-sm text-muted-foreground">
                        Individual navigation item
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">NavigationMenuTrigger</h4>
                      <p className="text-sm text-muted-foreground">
                        Trigger for dropdown menus
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">NavigationMenuContent</h4>
                      <p className="text-sm text-muted-foreground">
                        Content area for dropdowns
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Custom Menu Bar Props */}
              <Card>
                <CardHeader>
                  <CardTitle>Custom Menu Bar Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">variant</h4>
                      <p className="text-sm text-muted-foreground">
                        'default' | 'minimal' | 'enterprise' - Menu bar style
                        variant
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">items</h4>
                      <p className="text-sm text-muted-foreground">
                        MenuItem[] - Array of menu items with optional children
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">user</h4>
                      <p className="text-sm text-muted-foreground">
                        object - User information for user menu
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        NotificationItem[] - Array of notification items
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        object - Track menu interactions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">showSearch</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Show search button
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">showNotifications</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Show notifications dropdown
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">showUserMenu</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Show user menu dropdown
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Accessibility Features */}
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">ARIA</Badge>
                    <span className="text-sm">
                      Proper ARIA roles and labels for navigation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Keyboard</Badge>
                    <span className="text-sm">
                      Full keyboard navigation with arrow keys
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Focus</Badge>
                    <span className="text-sm">
                      Visible focus indicators and management
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Screen Readers</Badge>
                    <span className="text-sm">
                      Announces menu structure and states
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Mobile</Badge>
                    <span className="text-sm">
                      Responsive design with touch-friendly interactions
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MenuBarPage;
