import React, { useState } from "react";
import {
  Command as ShadcnCommand,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandEmpty,
} from "@/components/ui/command";
import { CustomCommand } from "@/components/custom/CustomCommand";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Check, AlertCircle } from "lucide-react";

const CommandPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const sampleItems = [
    {
      label: "Profile",
      value: "profile",
      icon: <Check className="h-4 w-4" />,
      group: "User",
    },
    {
      label: "Settings",
      value: "settings",
      icon: <Search className="h-4 w-4" />,
      group: "User",
    },
    {
      label: "Logout",
      value: "logout",
      icon: <AlertCircle className="h-4 w-4" />,
      group: "System",
      disabled: true,
    },
  ];

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Command</h1>
          <p className="text-muted-foreground">
            Command menus provide fast keyboard navigation and search for
            actions or navigation.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Command</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Command</TabsTrigger>
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
                <CardTitle>shadcn/ui Command</CardTitle>
                <CardDescription>
                  Standard command menu for keyboard navigation and search.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ShadcnCommand className="rounded-lg shadow-lg p-4 w-full max-w-md">
                  <CommandInput
                    placeholder="Type a command..."
                    className="mb-2"
                  />
                  <CommandList>
                    <CommandGroup heading="User">
                      <CommandItem>Profile</CommandItem>
                      <CommandItem>Settings</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="System">
                      <CommandItem disabled>Logout</CommandItem>
                    </CommandGroup>
                    <CommandEmpty>No results found.</CommandEmpty>
                  </CommandList>
                </ShadcnCommand>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Command, CommandInput, CommandList, CommandItem, CommandGroup, CommandSeparator, CommandEmpty } from "@/components/ui/command"

<Command>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandGroup heading="User">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="System">
      <CommandItem disabled>Logout</CommandItem>
    </CommandGroup>
    <CommandEmpty>No results found.</CommandEmpty>
  </CommandList>
</Command>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Command</CardTitle>
                <CardDescription>
                  Enhanced command menu with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomCommand
                  items={sampleItems}
                  analytics={{
                    event: "command_used",
                    properties: { component: "custom_command" },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Command Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomCommand } from "@/components/custom/CustomCommand"

<CustomCommand
  items={sampleItems}
  analytics={{ event: "command_used" }}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Command Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Command (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      Command, CommandInput, CommandList, CommandItem,
                      CommandGroup, CommandSeparator, CommandEmpty
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomCommand</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>items, analytics, emptyText</li>
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

export default CommandPage;
