import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CustomSheet } from "@/components/custom/CustomSheet";
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

const SheetPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
          <p className="text-muted-foreground">
            A panel that slides in from the side of the screen. Sheets are used
            for navigation, forms, or additional content.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Sheet</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Sheet</TabsTrigger>
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
                <CardTitle>shadcn/ui Sheet</CardTitle>
                <CardDescription>
                  Standard sheet component for sliding panels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <Menu className="mr-2 h-4 w-4" />
                      Open Sheet
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="p-6">
                      <h2 className="font-semibold text-lg mb-2">
                        Sheet Content
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        This is a basic shadcn/ui sheet. You can place any
                        content here.
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <div className="p-6">Sheet Content</div>
  </SheetContent>
</Sheet>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Sheet</CardTitle>
                <CardDescription>
                  Enhanced sheet with analytics, custom variants, and enterprise
                  features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomSheet
                  title="Custom Sheet"
                  description="This is a custom sheet with analytics and variants."
                  analytics={{
                    event: "sheet_opened",
                    properties: { component: "custom_sheet" },
                  }}
                  trigger={<Button variant="default">Open Custom Sheet</Button>}
                  variant="success"
                >
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      You can add forms, navigation, or any content here.
                    </p>
                    <Button variant="outline">Action</Button>
                  </div>
                </CustomSheet>
                <CustomSheet
                  title="Info Sheet"
                  description="Sheet with info variant."
                  analytics={{ event: "sheet_info_opened" }}
                  trigger={<Button variant="outline">Open Info Sheet</Button>}
                  variant="info"
                  side="left"
                >
                  <div className="text-sm">This is an info sheet.</div>
                </CustomSheet>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Sheet Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomSheet } from "@/components/custom/CustomSheet"

<CustomSheet
  title="Custom Sheet"
  description="This is a custom sheet."
  analytics={{ event: "sheet_opened" }}
  trigger={<Button>Open Sheet</Button>}
>
  <div>Sheet Content</div>
</CustomSheet>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sheet Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Sheet (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      Sheet, SheetContent, SheetTrigger
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomSheet</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>
                        title, description, analytics, variant, side, showClose
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

export default SheetPage;
