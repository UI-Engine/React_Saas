import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CustomSkeletons } from "@/components/custom/CustomSkeletons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const SkeletonsPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Skeletons</h1>
          <p className="text-muted-foreground">
            Skeletons are used as loading placeholders for content.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Skeleton</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Skeletons</TabsTrigger>
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
                <CardTitle>shadcn/ui Skeleton</CardTitle>
                <CardDescription>
                  Standard skeleton loading placeholders.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-full rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                  <Skeleton className="rounded-full w-12 h-12" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-6 w-full rounded" />
<Skeleton className="h-4 w-32 rounded" />
<Skeleton className="rounded-full w-12 h-12" />`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Skeletons</CardTitle>
                <CardDescription>
                  Enhanced skeletons with analytics, custom variants, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomSkeletons
                  count={3}
                  analytics={{
                    event: "skeletons_shown",
                    properties: { component: "custom_skeletons" },
                  }}
                />
                <CustomSkeletons count={1} variant="circle" />
                <CustomSkeletons count={2} variant="text" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Skeletons Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomSkeletons } from "@/components/custom/CustomSkeletons"

<CustomSkeletons count={3} />
<CustomSkeletons count={1} variant="circle" />
<CustomSkeletons count={2} variant="text" />`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skeletons Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Skeleton (shadcn/ui)</h4>
                    <p className="text-sm text-muted-foreground">Skeleton</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CustomSkeletons</h4>
                    <p className="text-sm text-muted-foreground">
                      All shadcn/ui props plus:
                    </p>
                    <ul className="text-xs list-disc ml-4">
                      <li>count, analytics, variant</li>
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
                      Screen reader announcements, ARIA roles, mobile responsive
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

export default SkeletonsPage;
