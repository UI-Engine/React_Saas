import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { CustomDrawer } from "@/components/custom/CustomDrawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Menu, Info, CheckCircle, AlertCircle } from "lucide-react";

const DrawerPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
          <p className="text-muted-foreground">
            A panel that slides in from the edge of the screen. Drawers are used
            for navigation, forms, or additional content.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Drawer</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Drawer</TabsTrigger>
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
                <CardTitle>shadcn/ui Drawer</CardTitle>
                <CardDescription>
                  Standard drawer component for sliding panels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="outline">
                      <Menu className="mr-2 h-4 w-4" />
                      Open Drawer
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6">
                      <h2 className="font-semibold text-lg mb-2">
                        Drawer Content
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        This is a basic shadcn/ui drawer. You can place any
                        content here.
                      </p>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="p-6">Drawer Content</div>
  </DrawerContent>
</Drawer>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Drawer</CardTitle>
                <CardDescription>
                  Enhanced drawer with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomDrawer
                  title="Custom Drawer"
                  description="This is a custom drawer with analytics and variants."
                  analytics={{
                    event: "drawer_opened",
                    properties: { component: "custom_drawer" },
                  }}
                  trigger={
                    <Button variant="default">Open Custom Drawer</Button>
                  }
                  variant="success"
                >
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      You can add forms, navigation, or any content here.
                    </p>
                    <Button variant="outline">Action</Button>
                  </div>
                </CustomDrawer>
                <CustomDrawer
                  title="Info Drawer"
                  description="Drawer with info variant."
                  analytics={{ event: "drawer_info_opened" }}
                  trigger={<Button variant="outline">Open Info Drawer</Button>}
                  variant="info"
                  size="sm"
                >
                  <div className="text-sm">This is an info drawer.</div>
                </CustomDrawer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Drawer Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomDrawer } from "@/components/custom/CustomDrawer"

<CustomDrawer
  title="Custom Drawer"
  description="This is a custom drawer."
  analytics={{ event: "drawer_opened" }}
  trigger={<Button>Open Drawer</Button>}
>
  <div>Drawer Content</div>
</CustomDrawer>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Drawer Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Drawer (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      Drawer, DrawerContent, DrawerTrigger
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomDrawer</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>
                        title, description, analytics, variant, size, showClose
                      </li>
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

export default DrawerPage;
