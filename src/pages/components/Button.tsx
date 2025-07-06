import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/custom/CustomButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Heart,
  Settings,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";

const ButtonPage = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("shadcn");

  const handleAnalyticsClick = () => {
    console.log("Analytics event triggered!");
  };

  const handleAsyncClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Button</h1>
          <p className="text-muted-foreground">
            Displays a button or a component that looks like a button. Buttons
            are used to trigger actions or events.
          </p>
        </div>
      </div>

      {/* Scrollable Content with Fixed Tabs */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          {/* Fixed Tabs List */}
          <div className="sticky top-0 z-10 bg-background pb-4">
            <TabsList className="">
              <TabsTrigger value="shadcn">shadcn/ui Button</TabsTrigger>
              <TabsTrigger value="custom">UIEngine Custom Button</TabsTrigger>
              <TabsTrigger value="props">Props & Types</TabsTrigger>
            </TabsList>
          </div>

          {/* Scrollable Tabs Content */}
          <div className="mt-4">
            <TabsContent value="shadcn" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Button Variants</CardTitle>
                  <CardDescription>
                    Standard button variants with different styles and use
                    cases.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">With Icons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline">
                        <Heart className="mr-2 h-4 w-4" />
                        Favorite
                      </Button>
                      <Button variant="ghost">
                        Settings
                        <Settings className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">States</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                      <Button>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Loading
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`import { Button } from "@/components/ui/button"

// Basic usage
<Button variant="default">Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>UIEngine Custom Button</CardTitle>
                  <CardDescription>
                    Enhanced button component with enterprise features like
                    loading states, analytics tracking, and custom variants.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      <CustomButton variant="success">
                        <Check className="mr-2 h-4 w-4" />
                        Success
                      </CustomButton>
                      <CustomButton variant="warning">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Warning
                      </CustomButton>
                      <CustomButton gradient>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Gradient
                      </CustomButton>
                      <CustomButton pulse>Pulse Effect</CustomButton>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Loading States</h3>
                    <div className="flex flex-wrap gap-4">
                      <CustomButton loading>Loading Button</CustomButton>
                      <CustomButton onClick={handleAsyncClick}>
                        {loading ? "Processing..." : "Async Action"}
                      </CustomButton>
                      <CustomButton success>Success State</CustomButton>
                      <CustomButton error>Error State</CustomButton>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Analytics Tracking
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <CustomButton
                        analytics={{
                          event: "button_click",
                          properties: {
                            component: "custom_button",
                            action: "primary_action",
                          },
                        }}
                        onClick={handleAnalyticsClick}
                      >
                        Track Click
                      </CustomButton>
                      <CustomButton
                        variant="outline"
                        analytics={{
                          event: "form_submit",
                          properties: { form: "contact", step: "1" },
                        }}
                      >
                        Submit Form
                      </CustomButton>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Check the console to see analytics events being logged.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Icon Positions</h3>
                    <div className="flex flex-wrap gap-4">
                      <CustomButton
                        icon={<Settings className="h-4 w-4" />}
                        iconPosition="left"
                      >
                        Left Icon
                      </CustomButton>
                      <CustomButton
                        icon={<ArrowRight className="h-4 w-4" />}
                        iconPosition="right"
                      >
                        Right Icon
                      </CustomButton>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Button Code Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`import { CustomButton } from "@/components/custom/CustomButton"

// Custom variants
<CustomButton variant="success">
  <Check className="mr-2 h-4 w-4" />
  Success
</CustomButton>

// Loading states
<CustomButton loading>Loading</CustomButton>
<CustomButton success>Success</CustomButton>

// Analytics tracking
<CustomButton
  analytics={{
    event: 'button_click',
    properties: { component: 'custom_button' }
  }}
>
  Track Me
</CustomButton>

// Enhanced features
<CustomButton gradient pulse>
  Enhanced Button
</CustomButton>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="props" className="space-y-6 mt-0">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>shadcn/ui Button Props</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">variant</h4>
                        <p className="text-sm text-muted-foreground">
                          'default' | 'destructive' | 'outline' | 'secondary' |
                          'ghost' | 'link'
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">size</h4>
                        <p className="text-sm text-muted-foreground">
                          'default' | 'sm' | 'lg' | 'icon'
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">asChild</h4>
                        <p className="text-sm text-muted-foreground">
                          boolean - Change the default rendered element
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Custom Button Props</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">variant</h4>
                        <p className="text-sm text-muted-foreground">
                          Extends shadcn/ui + 'success' | 'warning'
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">loading</h4>
                        <p className="text-sm text-muted-foreground">
                          boolean - Show loading spinner
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          object - Track button interactions
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">gradient</h4>
                        <p className="text-sm text-muted-foreground">
                          boolean - Apply gradient background
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">pulse</h4>
                        <p className="text-sm text-muted-foreground">
                          boolean - Add pulse animation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">ARIA</Badge>
                      <span className="text-sm">
                        Proper ARIA labels and roles
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Keyboard</Badge>
                      <span className="text-sm">
                        Full keyboard navigation support
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Focus</Badge>
                      <span className="text-sm">Visible focus indicators</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Screen Readers</Badge>
                      <span className="text-sm">
                        Compatible with screen readers
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ButtonPage;
