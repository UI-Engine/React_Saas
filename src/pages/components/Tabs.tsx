import React, { useState } from "react";
import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { CustomTabs } from "@/components/custom/CustomTabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList as DemoTabsList,
  TabsTrigger as DemoTabsTrigger,
} from "@/components/ui/tabs";

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const customTabs = [
    {
      value: "overview",
      label: "Overview",
      content: <div>Overview content</div>,
    },
    {
      value: "features",
      label: "Features",
      content: <div>Features content</div>,
    },
    {
      value: "settings",
      label: "Settings",
      content: <div>Settings content</div>,
      disabled: true,
    },
  ];

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
          <p className="text-muted-foreground">
            Tabs organize content into sections. Tabs are used for navigation or
            switching between views.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <DemoTabsList>
            <DemoTabsTrigger value="shadcn">shadcn/ui Tabs</DemoTabsTrigger>
            <DemoTabsTrigger value="custom">
              UIEngine Custom Tabs
            </DemoTabsTrigger>
            <DemoTabsTrigger value="props">Props & Types</DemoTabsTrigger>
          </DemoTabsList>
        </Tabs>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsContent value="shadcn" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui Tabs</CardTitle>
                <CardDescription>
                  Standard tabs for navigation or content switching.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ShadcnTabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="settings" disabled>
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">Overview content</TabsContent>
                  <TabsContent value="features">Features content</TabsContent>
                  <TabsContent value="settings">Settings content</TabsContent>
                </ShadcnTabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="features">Features</TabsTrigger>
    <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="features">Features content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Tabs</CardTitle>
                <CardDescription>
                  Enhanced tabs with analytics, custom variants, and enterprise
                  features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomTabs
                  tabs={customTabs}
                  analytics={{
                    event: "tabs_interaction",
                    properties: { component: "custom_tabs" },
                  }}
                  variant="underline"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Tabs Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomTabs } from "@/components/custom/CustomTabs"

<CustomTabs
  tabs={customTabs}
  analytics={{ event: "tabs_interaction" }}
  variant="underline"
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tabs Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Tabs (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      Tabs, TabsList, TabsTrigger, TabsContent
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomTabs</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>tabs, analytics, variant, orientation</li>
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

export default TabsPage;
