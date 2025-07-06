import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Users,
  TrendingUp,
  Settings,
  Download,
  Star,
  Eye,
  Heart,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";

const CardsPage = () => {
  const [activeTab, setActiveTab] = useState("shadcn");

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Cards</h1>
          <p className="text-muted-foreground">
            Displays content in a structured container. Cards are used to group
            related content and actions.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Cards</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Cards</TabsTrigger>
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
                <CardTitle>shadcn/ui Card Variants</CardTitle>
                <CardDescription>
                  Standard card variants with different layouts and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Card</h3>
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>
                        Card description goes here
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        This is the card content. You can put any content here.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Card with Actions</h3>
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>
                        Manage your account settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>Configure your preferences and account settings.</p>
                      <div className="flex gap-2">
                        <Button size="sm">Save</Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Card with Icons</h3>
                  <Card className="w-full max-w-sm">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <CardTitle>Team Members</CardTitle>
                      </div>
                      <CardDescription>
                        Manage your team and permissions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Add, remove, and manage team member access.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Grid of Cards</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Revenue</CardTitle>
                        <CardDescription>
                          Monthly revenue overview
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Subscriptions</CardTitle>
                        <CardDescription>Active subscriptions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                          +180.1% from last month
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Sales</CardTitle>
                        <CardDescription>
                          Total sales this month
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                          +19% from last month
                        </p>
                      </CardContent>
                    </Card>
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
                  <code>{`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>

// Card with actions
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Save</Button>
  </CardContent>
</Card>

// Card with icons
<Card>
  <CardHeader>
    <div className="flex items-center gap-2">
      <Users className="h-5 w-5" />
      <CardTitle>Team</CardTitle>
    </div>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Cards</CardTitle>
                <CardDescription>
                  Enhanced card components with hover effects, gradients, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Hover Effects</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <CardTitle>Growth</CardTitle>
                        </div>
                        <CardDescription>
                          Business growth metrics
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                          +23.5%
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Compared to last quarter
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <CardTitle>Users</CardTitle>
                        </div>
                        <CardDescription>Active user count</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-blue-600">
                          12,543
                        </div>
                        <p className="text-sm text-muted-foreground">
                          +1,234 this week
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="transition-all duration-200 hover:shadow-xl hover:rotate-1 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-purple-600" />
                          <CardTitle>Revenue</CardTitle>
                        </div>
                        <CardDescription>Monthly revenue</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-purple-600">
                          $89,432
                        </div>
                        <p className="text-sm text-muted-foreground">
                          +12.3% from last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Gradient Cards</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
                      <CardHeader>
                        <CardTitle className="text-white">
                          Premium Plan
                        </CardTitle>
                        <CardDescription className="text-blue-100">
                          Access to all premium features
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-2">$29/month</div>
                        <ul className="space-y-1 text-sm text-blue-100">
                          <li>✓ Unlimited projects</li>
                          <li>✓ Priority support</li>
                          <li>✓ Advanced analytics</li>
                        </ul>
                        <Button className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-50">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
                      <CardHeader>
                        <CardTitle className="text-white">
                          Success Metrics
                        </CardTitle>
                        <CardDescription className="text-green-100">
                          Your performance highlights
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Conversion Rate</span>
                            <span className="font-bold">3.2%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Customer Satisfaction</span>
                            <span className="font-bold">4.8/5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Response Time</span>
                            <span className="font-bold">2.1s</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Interactive Cards</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Project Alpha</CardTitle>
                          <Badge variant="secondary">Active</Badge>
                        </div>
                        <CardDescription>
                          Web application development
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Due: March 15, 2026</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>5 team members</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-3/4"></div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            75% complete
                          </p>
                        </div>
                        <Button className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Design System</CardTitle>
                          <Badge variant="outline">In Review</Badge>
                        </div>
                        <CardDescription>
                          Component library update
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Eye className="h-4 w-4" />
                            <span>12 reviewers</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="h-4 w-4" />
                            <span>4.8 rating</span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Review
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Marketing Campaign</CardTitle>
                          <Badge variant="destructive">Draft</Badge>
                        </div>
                        <CardDescription>Q1 2026 campaign</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>Global</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Heart className="h-4 w-4" />
                            <span>Social media focus</span>
                          </div>
                          <div className="text-sm">
                            <p className="text-muted-foreground">
                              Budget: $50,000
                            </p>
                            <p className="text-muted-foreground">
                              Target: 100K impressions
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Edit Campaign
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enterprise Features</h3>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-blue-600" />
                          <CardTitle>System Configuration</CardTitle>
                        </div>
                        <Badge variant="outline">Admin Only</Badge>
                      </div>
                      <CardDescription>
                        Configure system-wide settings and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Environment</p>
                            <p className="text-muted-foreground">Production</p>
                          </div>
                          <div>
                            <p className="font-medium">Version</p>
                            <p className="text-muted-foreground">2.1.0</p>
                          </div>
                          <div>
                            <p className="font-medium">Last Updated</p>
                            <p className="text-muted-foreground">2 hours ago</p>
                          </div>
                          <div>
                            <p className="font-medium">Status</p>
                            <Badge variant="default" className="text-xs">
                              Healthy
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export Config
                          </Button>
                          <Button variant="outline" size="sm">
                            View Logs
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Cards Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Hover effects
<Card className="transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
  <CardHeader>
    <CardTitle>Hover Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>

// Gradient card
<Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
  <CardHeader>
    <CardTitle className="text-white">Gradient Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>

// Interactive card with group hover
<Card className="group cursor-pointer">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
  </CardHeader>
  <CardContent>
    <Button className="opacity-0 group-hover:opacity-100 transition-opacity">
      Action
    </Button>
  </CardContent>
</Card>

// Enterprise card with border accent
<Card className="border-l-4 border-l-blue-500">
  <CardHeader>
    <CardTitle>Enterprise Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Card Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">children</h4>
                      <p className="text-sm text-muted-foreground">
                        ReactNode - Card content
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">className</h4>
                      <p className="text-sm text-muted-foreground">
                        string - Additional CSS classes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">CardHeader</h4>
                      <p className="text-sm text-muted-foreground">
                        Contains CardTitle and CardDescription
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">CardContent</h4>
                      <p className="text-sm text-muted-foreground">
                        Main content area of the card
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Card Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Hover Effects</h4>
                      <p className="text-sm text-muted-foreground">
                        Scale, shadow, and transform animations
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Gradients</h4>
                      <p className="text-sm text-muted-foreground">
                        Background gradients for visual appeal
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Interactive States</h4>
                      <p className="text-sm text-muted-foreground">
                        Group hover effects and transitions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Border Accents</h4>
                      <p className="text-sm text-muted-foreground">
                        Colored borders for status indication
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Enterprise Features</h4>
                      <p className="text-sm text-muted-foreground">
                        Admin badges, status indicators, and actions
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
                    <Badge variant="secondary">Semantic</Badge>
                    <span className="text-sm">
                      Proper HTML structure and semantics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Focus</Badge>
                    <span className="text-sm">
                      Visible focus indicators for interactive cards
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Keyboard</Badge>
                    <span className="text-sm">
                      Full keyboard navigation support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Screen Readers</Badge>
                    <span className="text-sm">
                      Proper heading hierarchy and descriptions
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

export default CardsPage;
