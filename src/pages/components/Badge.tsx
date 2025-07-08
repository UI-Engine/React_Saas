import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CustomBadge } from "@/components/custom/CustomBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const BadgePage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
          <p className="text-muted-foreground">
            Displays a badge, count, or status indicator. Badges are used to
            highlight important information.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Badge</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Badge</TabsTrigger>
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
                <CardTitle>shadcn/ui Badge Variants</CardTitle>
                <CardDescription>
                  Standard badge variants with different styles and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Variants</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">With Icons</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Success
                    </Badge>
                    <Badge variant="destructive">
                      <AlertCircle className="mr-1 h-3 w-3" />
                      Error
                    </Badge>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                    <Badge variant="secondary">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Count Badges</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span>Notifications</span>
                      <Badge variant="destructive">12</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Messages</span>
                      <Badge variant="secondary">3</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Updates</span>
                      <Badge variant="outline">5</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Status Indicators</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Active</Badge>
                    <Badge variant="secondary">Inactive</Badge>
                    <Badge variant="destructive">Suspended</Badge>
                    <Badge variant="outline">Pending</Badge>
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
                  <code>{`import { Badge } from "@/components/ui/badge"

// Basic variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// With icons
<Badge>
  <CheckCircle className="mr-1 h-3 w-3" />
  Success
</Badge>

// Count badges
<div className="flex items-center gap-2">
  <span>Notifications</span>
  <Badge variant="destructive">12</Badge>
</div>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Badge</CardTitle>
                <CardDescription>
                  Enhanced badge component with status indicators, animations,
                  gradients, and analytics tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Custom Variants</h3>
                  <div className="flex flex-wrap gap-2">
                    <CustomBadge variant="success">Success</CustomBadge>
                    <CustomBadge variant="warning">Warning</CustomBadge>
                    <CustomBadge variant="info">Info</CustomBadge>
                    <CustomBadge variant="premium">Premium</CustomBadge>
                    <CustomBadge gradient>Gradient</CustomBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Status Indicators</h3>
                  <div className="flex flex-wrap gap-2">
                    <CustomBadge status="online">Online</CustomBadge>
                    <CustomBadge status="offline">Offline</CustomBadge>
                    <CustomBadge status="away">Away</CustomBadge>
                    <CustomBadge status="busy">Busy</CustomBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Animated Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <CustomBadge animated>Hover Me</CustomBadge>
                    <CustomBadge pulse>Pulse</CustomBadge>
                    <CustomBadge gradient animated>
                      Gradient + Hover
                    </CustomBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <CustomBadge size="sm">Small</CustomBadge>
                    <CustomBadge size="default">Default</CustomBadge>
                    <CustomBadge size="lg">Large</CustomBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Icon Positions</h3>
                  <div className="flex flex-wrap gap-2">
                    <CustomBadge
                      icon={<Zap className="h-3 w-3" />}
                      iconPosition="left"
                    >
                      Left Icon
                    </CustomBadge>
                    <CustomBadge
                      icon={<Star className="h-3 w-3" />}
                      iconPosition="right"
                    >
                      Right Icon
                    </CustomBadge>
                    <CustomBadge variant="success" iconPosition="left">
                      Auto Icon
                    </CustomBadge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enterprise Features</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <CustomBadge
                        variant="premium"
                        analytics={{
                          event: "premium_badge_clicked",
                          properties: {
                            component: "custom_badge",
                            user_type: "premium",
                          },
                        }}
                      >
                        Premium User
                      </CustomBadge>
                      <CustomBadge
                        variant="success"
                        status="online"
                        analytics={{
                          event: "status_badge_interaction",
                          properties: {
                            status: "online",
                            component: "custom_badge",
                          },
                        }}
                      >
                        Active Session
                      </CustomBadge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <CustomBadge variant="info" pulse>
                        <Users className="h-3 w-3" />
                        Live Users: 1,234
                      </CustomBadge>
                      <CustomBadge variant="warning" animated>
                        <TrendingUp className="h-3 w-3" />
                        Performance Alert
                      </CustomBadge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Real-world Examples</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">
                            Software Engineer
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <CustomBadge status="online" size="sm">
                          Online
                        </CustomBadge>
                        <CustomBadge variant="premium" size="sm">
                          Pro
                        </CustomBadge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">System Status</p>
                          <p className="text-sm text-muted-foreground">
                            All systems operational
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <CustomBadge variant="success" size="sm">
                          Healthy
                        </CustomBadge>
                        <CustomBadge variant="info" size="sm">
                          99.9% Uptime
                        </CustomBadge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Badge Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomBadge } from "@/components/custom/CustomBadge"

// Custom variants
<CustomBadge variant="success">Success</CustomBadge>
<CustomBadge variant="warning">Warning</CustomBadge>
<CustomBadge variant="premium">Premium</CustomBadge>

// Status indicators
<CustomBadge status="online">Online</CustomBadge>
<CustomBadge status="offline">Offline</CustomBadge>

// Animated badges
<CustomBadge animated>Hover Me</CustomBadge>
<CustomBadge pulse>Pulse</CustomBadge>
<CustomBadge gradient>Gradient</CustomBadge>

// Sizes
<CustomBadge size="sm">Small</CustomBadge>
<CustomBadge size="lg">Large</CustomBadge>

// Icon positions
<CustomBadge icon={<Star className="h-3 w-3" />} iconPosition="right">
  Right Icon
</CustomBadge>

// Analytics tracking
<CustomBadge
  analytics={{
    event: 'badge_clicked',
    properties: { component: 'custom_badge' }
  }}
>
  Tracked Badge
</CustomBadge>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Badge Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">variant</h4>
                      <p className="text-sm text-muted-foreground">
                        'default' | 'secondary' | 'destructive' | 'outline' -
                        Badge style variant
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">children</h4>
                      <p className="text-sm text-muted-foreground">
                        ReactNode - Badge content
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">className</h4>
                      <p className="text-sm text-muted-foreground">
                        string - Additional CSS classes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Badge Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">variant</h4>
                      <p className="text-sm text-muted-foreground">
                        Extends shadcn/ui + 'success' | 'warning' | 'info' |
                        'premium'
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">size</h4>
                      <p className="text-sm text-muted-foreground">
                        'sm' | 'default' | 'lg' - Badge size
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">status</h4>
                      <p className="text-sm text-muted-foreground">
                        'online' | 'offline' | 'away' | 'busy' - Status
                        indicator
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">animated</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Add hover scale animation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">pulse</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Add pulse animation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">gradient</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Apply gradient background
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        object - Track badge interactions
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
                      Announces badge content and status
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

export default BadgePage;
