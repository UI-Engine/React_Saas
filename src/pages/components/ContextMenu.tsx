import React, { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { CustomContextMenu } from "@/components/custom/CustomContextMenu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Info } from "lucide-react";

const ContextMenuPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const sampleItems = [
    { label: "Copy", value: "copy", icon: <Check className="h-4 w-4" /> },
    { label: "Paste", value: "paste", icon: <Info className="h-4 w-4" /> },
    {
      label: "Delete",
      value: "delete",
      icon: <AlertCircle className="h-4 w-4" />,
      disabled: true,
    },
  ];

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
          <p className="text-muted-foreground">
            Context menus provide additional actions on right-click or
            long-press.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Context Menu</TabsTrigger>
            <TabsTrigger value="custom">
              UIEngine Custom Context Menu
            </TabsTrigger>
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
                <CardTitle>shadcn/ui Context Menu</CardTitle>
                <CardDescription>
                  Standard context menu for additional actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ContextMenu>
                  <ContextMenuTrigger asChild>
                    <Button variant="outline">Right-click me</Button>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuLabel>Actions</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Copy</ContextMenuItem>
                    <ContextMenuItem>Paste</ContextMenuItem>
                    <ContextMenuItem disabled>Delete</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger asChild>
    <Button>Right-click me</Button>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuItem disabled>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Context Menu</CardTitle>
                <CardDescription>
                  Enhanced context menu with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomContextMenu
                  label="Custom Actions"
                  items={sampleItems}
                  analytics={{
                    event: "contextmenu_opened",
                    properties: { component: "custom_contextmenu" },
                  }}
                  trigger={
                    <Button variant="default">Right-click me (Custom)</Button>
                  }
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Context Menu Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomContextMenu } from "@/components/custom/CustomContextMenu"

<CustomContextMenu
  label="Custom Actions"
  items={sampleItems}
  analytics={{ event: "contextmenu_opened" }}
  trigger={<Button>Right-click me</Button>}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Context Menu Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">ContextMenu (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      ContextMenu, ContextMenuContent, ContextMenuItem,
                      ContextMenuTrigger
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomContextMenu</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>label, items, analytics</li>
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

export default ContextMenuPage;
