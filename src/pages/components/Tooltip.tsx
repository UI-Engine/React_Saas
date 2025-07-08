import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CustomTooltip } from "@/components/custom/CustomTooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const TooltipPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
          <p className="text-muted-foreground">
            Tooltips display informative text when users hover or focus on an
            element.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Tooltip</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Tooltip</TabsTrigger>
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
                <CardTitle>shadcn/ui Tooltip</CardTitle>
                <CardDescription>
                  Standard tooltip for showing additional information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>Tooltip content</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip content</TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Tooltip</CardTitle>
                <CardDescription>
                  Enhanced tooltip with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomTooltip
                  content="This is a custom tooltip."
                  analytics={{
                    event: "tooltip_shown",
                    properties: { component: "custom_tooltip" },
                  }}
                >
                  <Button variant="default">Hover me (Custom)</Button>
                </CustomTooltip>
                <CustomTooltip
                  content="Info tooltip variant."
                  analytics={{ event: "tooltip_info_shown" }}
                  variant="info"
                >
                  <Button variant="outline">Hover me (Info)</Button>
                </CustomTooltip>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Tooltip Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomTooltip } from "@/components/custom/CustomTooltip"

<CustomTooltip
  content="This is a custom tooltip."
  analytics={{ event: "tooltip_shown" }}
>
  <Button>Hover me</Button>
</CustomTooltip>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Tooltip (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">
                      Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomTooltip</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>content, analytics, variant, side</li>
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
                      Screen reader announcements, keyboard navigation, ARIA
                      roles, mobile responsive
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

export default TooltipPage;
