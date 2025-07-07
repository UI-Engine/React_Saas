import React, { useState } from "react";
import { CustomToast } from "@/components/custom/CustomToast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const ToastPage = () => {
  const [activeTab, setActiveTab] = useState("custom");
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Toast</h1>
          <p className="text-muted-foreground">
            Toasts are used to display brief, auto-dismissing notifications.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="custom">UIEngine Custom Toast</TabsTrigger>
            <TabsTrigger value="props">Props & Types</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Toast</CardTitle>
                <CardDescription>
                  Enhanced toast with analytics, custom variants, and enterprise
                  features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button onClick={() => setShowToast(true)} variant="default">
                  Show Custom Toast
                </Button>
                {showToast && (
                  <CustomToast
                    title="Success!"
                    description="Your action was successful."
                    variant="success"
                    analytics={{
                      event: "toast_shown",
                      properties: { component: "custom_toast" },
                    }}
                    onOpenChange={setShowToast}
                  />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Toast Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomToast } from "@/components/custom/CustomToast"

<CustomToast
  title="Success!"
  description="Your action was successful."
  variant="success"
  analytics={{ event: "toast_shown" }}
  onOpenChange={setShowToast}
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Toast Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">CustomToast</h4>
                    <ul className="text-xs list-disc ml-4">
                      <li>
                        title, description, analytics, variant, duration,
                        onOpenChange, action, dismissible
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
                      Screen reader announcements, keyboard dismiss, ARIA roles,
                      mobile responsive
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

export default ToastPage;
