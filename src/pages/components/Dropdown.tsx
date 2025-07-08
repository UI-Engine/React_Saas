import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CustomDropdown } from "@/components/custom/CustomDropdown";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check, AlertCircle, Info } from "lucide-react";

const DropdownPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const sampleItems = [
    { label: "Profile", value: "profile", icon: <Check className="h-4 w-4" /> },
    {
      label: "Settings",
      value: "settings",
      icon: <Info className="h-4 w-4" />,
    },
    {
      label: "Logout",
      value: "logout",
      icon: <AlertCircle className="h-4 w-4" />,
      disabled: true,
    },
  ];

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dropdown</h1>
          <p className="text-muted-foreground">
            A dropdown menu for actions or navigation. Dropdowns are used for
            secondary actions.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Dropdown</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Dropdown</TabsTrigger>
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
                <CardTitle>shadcn/ui Dropdown</CardTitle>
                <CardDescription>
                  Standard dropdown menu for actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Actions <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem disabled>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem disabled>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Dropdown</CardTitle>
                <CardDescription>
                  Enhanced dropdown with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomDropdown
                  label="Custom Actions"
                  items={sampleItems}
                  analytics={{
                    event: "dropdown_opened",
                    properties: { component: "custom_dropdown" },
                  }}
                  trigger={
                    <Button variant="default">Open Custom Dropdown</Button>
                  }
                />
                <CustomDropdown
                  label="Info Dropdown"
                  items={sampleItems}
                  analytics={{ event: "dropdown_info_opened" }}
                  trigger={
                    <Button variant="outline">Open Info Dropdown</Button>
                  }
                  variant="info"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Dropdown Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomDropdown } from "@/components/custom/CustomDropdown"

<CustomDropdown
  label="Custom Actions"
  items={sampleItems}
  analytics={{ event: "dropdown_opened" }}
  trigger={<Button>Open Dropdown</Button>}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">DropdownMenu (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      DropdownMenu, DropdownMenuContent, DropdownMenuItem,
                      DropdownMenuTrigger
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomDropdown</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>label, items, analytics, variant</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      Keyboard navigation, focus management, ARIA roles, mobile
                      responsive
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

export default DropdownPage;
