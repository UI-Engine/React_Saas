import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/custom/CustomAccordion";
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
  Settings,
  FileText,
  Users,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const AccordionPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
          <p className="text-muted-foreground">
            A vertically collapsible section that can be used to organize
            content into expandable sections.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Accordion</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Accordion</TabsTrigger>
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
                <CardTitle>shadcn/ui Accordion Variants</CardTitle>
                <CardDescription>
                  Standard accordion variants with different types and
                  behaviors.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Single Accordion */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Single Accordion</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that match the other
                        components' aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It's animated by default, but you can disable it if
                        you prefer.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Multiple Accordion */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Multiple Accordion</h3>
                  <Accordion type="multiple">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Can I open multiple items?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes! With the multiple type, you can have multiple items
                        open at the same time.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it customizable?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely! You can customize the styling, animations,
                        and behavior to match your needs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        What about accessibility?
                      </AccordionTrigger>
                      <AccordionContent>
                        It follows WAI-ARIA guidelines and works great with
                        screen readers and keyboard navigation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* With Icons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">With Icons</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="settings">
                      <AccordionTrigger className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                      </AccordionTrigger>
                      <AccordionContent>
                        Configure your application settings and preferences
                        here.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="documents">
                      <AccordionTrigger className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Documents
                      </AccordionTrigger>
                      <AccordionContent>
                        View and manage your documents and files.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="users">
                      <AccordionTrigger className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Users
                      </AccordionTrigger>
                      <AccordionContent>
                        Manage user accounts and permissions.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Single accordion
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple accordion
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
    <AccordionContent>
      Yes! With the multiple type, you can have multiple items open.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Accordion</CardTitle>
                <CardDescription>
                  Enhanced accordion component with status indicators, analytics
                  tracking, and custom animations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Status Variants</h3>
                  <CustomAccordion
                    type="single"
                    collapsible
                    analytics={{
                      event: "accordion_interaction",
                      properties: {
                        component: "custom_accordion",
                        variant: "status",
                      },
                    }}
                  >
                    <CustomAccordionItem value="success" status="success">
                      <CustomAccordionTrigger status="success">
                        Completed Tasks
                      </CustomAccordionTrigger>
                      <CustomAccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            All tasks have been completed successfully.
                          </p>
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              3 tasks completed
                            </span>
                          </div>
                        </div>
                      </CustomAccordionContent>
                    </CustomAccordionItem>

                    <CustomAccordionItem value="warning" status="warning">
                      <CustomAccordionTrigger status="warning">
                        Pending Reviews
                      </CustomAccordionTrigger>
                      <CustomAccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Items awaiting review and approval.
                          </p>
                          <div className="flex items-center gap-2 text-yellow-600">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              2 items pending
                            </span>
                          </div>
                        </div>
                      </CustomAccordionContent>
                    </CustomAccordionItem>

                    <CustomAccordionItem value="error" status="error">
                      <CustomAccordionTrigger status="error">
                        Failed Operations
                      </CustomAccordionTrigger>
                      <CustomAccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Operations that failed and require attention.
                          </p>
                          <div className="flex items-center gap-2 text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              1 operation failed
                            </span>
                          </div>
                        </div>
                      </CustomAccordionContent>
                    </CustomAccordionItem>
                  </CustomAccordion>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Custom Animations</h3>
                  <CustomAccordion type="single" collapsible>
                    <CustomAccordionItem value="fade">
                      <CustomAccordionTrigger>
                        Fade Animation
                      </CustomAccordionTrigger>
                      <CustomAccordionContent animation="fade">
                        This content uses a fade animation when expanding and
                        collapsing.
                      </CustomAccordionContent>
                    </CustomAccordionItem>
                    <CustomAccordionItem value="slide">
                      <CustomAccordionTrigger>
                        Slide Animation
                      </CustomAccordionTrigger>
                      <CustomAccordionContent animation="slide">
                        This content uses the default slide animation.
                      </CustomAccordionContent>
                    </CustomAccordionItem>
                    <CustomAccordionItem value="none">
                      <CustomAccordionTrigger>
                        No Animation
                      </CustomAccordionTrigger>
                      <CustomAccordionContent animation="none">
                        This content has no animation for instant show/hide.
                      </CustomAccordionContent>
                    </CustomAccordionItem>
                  </CustomAccordion>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enterprise Features</h3>
                  <CustomAccordion
                    type="multiple"
                    analytics={{
                      event: "enterprise_accordion_usage",
                      properties: { section: "billing", user_type: "admin" },
                    }}
                  >
                    <CustomAccordionItem
                      value="billing"
                      status="success"
                      analytics={{
                        event: "billing_section_opened",
                        properties: { section: "billing_overview" },
                      }}
                    >
                      <CustomAccordionTrigger status="success">
                        <CreditCard className="h-4 w-4" />
                        Billing & Payments
                      </CustomAccordionTrigger>
                      <CustomAccordionContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Manage your billing information and payment methods.
                          </p>
                          <div className="grid gap-2 text-sm">
                            <div className="flex justify-between">
                              <span>Current Plan:</span>
                              <span className="font-medium">Pro Plan</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Next Billing:</span>
                              <span className="font-medium">
                                March 15, 2026
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Amount:</span>
                              <span className="font-medium text-green-600">
                                $29.99
                              </span>
                            </div>
                          </div>
                        </div>
                      </CustomAccordionContent>
                    </CustomAccordionItem>

                    <CustomAccordionItem value="security" status="default">
                      <CustomAccordionTrigger>
                        <Settings className="h-4 w-4" />
                        Security Settings
                      </CustomAccordionTrigger>
                      <CustomAccordionContent>
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Configure security settings and access controls.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">
                                Two-Factor Authentication
                              </span>
                              <Badge variant="secondary">Enabled</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Session Timeout</span>
                              <Badge variant="outline">30 minutes</Badge>
                            </div>
                          </div>
                        </div>
                      </CustomAccordionContent>
                    </CustomAccordionItem>
                  </CustomAccordion>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Accordion Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/custom/CustomAccordion"

// Status variants
<CustomAccordion type="single" collapsible>
  <CustomAccordionItem value="success" status="success">
    <CustomAccordionTrigger status="success">
      Completed Tasks
    </CustomAccordionTrigger>
    <CustomAccordionContent>
      Content here...
    </CustomAccordionContent>
  </CustomAccordionItem>
</CustomAccordion>

// Analytics tracking
<CustomAccordion
  analytics={{
    event: 'accordion_interaction',
    properties: { component: 'custom_accordion' }
  }}
>
  {/* Accordion items */}
</CustomAccordion>

// Custom animations
<CustomAccordionContent animation="fade">
  Fade animation content
</CustomAccordionContent>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Accordion Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">type</h4>
                      <p className="text-sm text-muted-foreground">
                        'single' | 'multiple' - Type of accordion
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">collapsible</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Allow all items to be closed
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">value</h4>
                      <p className="text-sm text-muted-foreground">
                        string - Unique identifier for accordion item
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Accordion Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">status</h4>
                      <p className="text-sm text-muted-foreground">
                        'default' | 'success' | 'warning' | 'error' - Visual
                        status indicator
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        object - Track accordion interactions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">animation</h4>
                      <p className="text-sm text-muted-foreground">
                        'slide' | 'fade' | 'none' - Content animation type
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">disabled</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Disable accordion item
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
                      WAI-ARIA accordion pattern implementation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Keyboard</Badge>
                    <span className="text-sm">
                      Arrow keys, Enter, Space navigation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Focus</Badge>
                    <span className="text-sm">
                      Proper focus management and indicators
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Screen Readers</Badge>
                    <span className="text-sm">
                      Announces expanded/collapsed states
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

export default AccordionPage;
