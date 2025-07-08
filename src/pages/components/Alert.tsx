import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CustomAlert } from "@/components/custom/CustomAlert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  Bell,
  Download,
  RefreshCw,
} from "lucide-react";

const AlertPage = () => {
  const [showDismissible, setShowDismissible] = useState(true);
  const [showAutoDismiss, setShowAutoDismiss] = useState(true);
  const [activeTab, setActiveTab] = useState("shadcn");

  const handleActionClick = () => {
    console.log("Alert action clicked!");
  };

  const handleDismiss = () => {
    console.log("Alert dismissed!");
  };

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
          <p className="text-muted-foreground">
            Displays a callout for user attention. Alerts are used to
            communicate important messages to users.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="shadcn">shadcn/ui Alert</TabsTrigger>
            <TabsTrigger value="custom">UIEngine Custom Alert</TabsTrigger>
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
                <CardTitle>shadcn/ui Alert Variants</CardTitle>
                <CardDescription>
                  Standard alert variants with different styles and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Default Alert</h3>
                  <Alert>
                    <Bell className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the cli.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Destructive Alert</h3>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Your session has expired. Please log in again.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">With Custom Icons</h3>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert with a custom icon.
                    </AlertDescription>
                  </Alert>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Without Title</h3>
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Default alert
<Alert>
  <Bell className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>

// Without title
<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UIEngine Custom Alert</CardTitle>
                <CardDescription>
                  Enhanced alert component with dismissible alerts, action
                  buttons, auto-dismiss, and analytics tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Custom Variants</h3>
                  <div className="space-y-4">
                    <CustomAlert variant="success" title="Success!">
                      Your profile has been updated successfully. All changes
                      have been saved.
                    </CustomAlert>

                    <CustomAlert variant="warning" title="Warning">
                      Your subscription will expire in 7 days. Please renew to
                      continue using premium features.
                    </CustomAlert>

                    <CustomAlert variant="info" title="Information">
                      New features are available in the latest update. Check out
                      what's new!
                    </CustomAlert>

                    <CustomAlert variant="destructive" title="Error">
                      Failed to save changes. Please check your connection and
                      try again.
                    </CustomAlert>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Dismissible Alerts</h3>
                  {showDismissible && (
                    <CustomAlert
                      variant="info"
                      title="Dismissible Alert"
                      dismissible
                      onDismiss={() => setShowDismissible(false)}
                      analytics={{
                        event: "alert_dismissed",
                        properties: {
                          component: "custom_alert",
                          variant: "info",
                        },
                      }}
                    >
                      This alert can be dismissed by clicking the X button.
                      Click the button below to show it again.
                    </CustomAlert>
                  )}
                  {!showDismissible && (
                    <Button
                      onClick={() => setShowDismissible(true)}
                      variant="outline"
                    >
                      Show Dismissible Alert
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Action Alerts</h3>
                  <CustomAlert
                    variant="warning"
                    title="Update Available"
                    action={{
                      label: "Update Now",
                      onClick: handleActionClick,
                      variant: "default",
                    }}
                    analytics={{
                      event: "alert_action_clicked",
                      properties: {
                        component: "custom_alert",
                        action: "update",
                      },
                    }}
                  >
                    A new version of the application is available. Update now to
                    get the latest features and security improvements.
                  </CustomAlert>

                  <CustomAlert
                    variant="info"
                    title="Backup Required"
                    action={{
                      label: "Create Backup",
                      onClick: handleActionClick,
                      variant: "outline",
                    }}
                  >
                    Your data hasn't been backed up in 30 days. Create a backup
                    to ensure your data is safe.
                  </CustomAlert>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Auto-dismiss Alerts</h3>
                  {showAutoDismiss && (
                    <CustomAlert
                      variant="success"
                      title="Auto-dismiss Alert"
                      autoDismiss={5000}
                      onDismiss={() => setShowAutoDismiss(false)}
                      analytics={{
                        event: "alert_auto_dismissed",
                        properties: {
                          component: "custom_alert",
                          duration: 5000,
                        },
                      }}
                    >
                      This alert will automatically dismiss in 5 seconds. You
                      can also dismiss it manually.
                    </CustomAlert>
                  )}
                  {!showAutoDismiss && (
                    <Button
                      onClick={() => setShowAutoDismiss(true)}
                      variant="outline"
                    >
                      Show Auto-dismiss Alert
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enterprise Features</h3>
                  <CustomAlert
                    variant="warning"
                    title="System Maintenance"
                    dismissible
                    action={{
                      label: "View Details",
                      onClick: handleActionClick,
                      variant: "secondary",
                    }}
                    analytics={{
                      event: "maintenance_alert_interaction",
                      properties: {
                        component: "custom_alert",
                        alert_type: "maintenance",
                        user_role: "admin",
                      },
                    }}
                  >
                    Scheduled maintenance will begin in 2 hours. Expected
                    downtime: 30 minutes. All services will be affected.
                  </CustomAlert>

                  <CustomAlert
                    variant="success"
                    title="Deployment Successful"
                    action={{
                      label: "View Logs",
                      onClick: handleActionClick,
                      variant: "ghost",
                    }}
                  >
                    Version 2.1.0 has been successfully deployed to production.
                    All systems are operational.
                  </CustomAlert>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Alert Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomAlert } from "@/components/custom/CustomAlert"

// Custom variants
<CustomAlert variant="success" title="Success!">
  Your profile has been updated successfully.
</CustomAlert>

// Dismissible alert
<CustomAlert
  variant="info"
  title="Dismissible Alert"
  dismissible
  onDismiss={() => console.log('Dismissed')}
>
  This alert can be dismissed.
</CustomAlert>

// Action alert
<CustomAlert
  variant="warning"
  title="Update Available"
  action={{
    label: 'Update Now',
    onClick: () => console.log('Update clicked'),
    variant: 'default'
  }}
>
  A new version is available.
</CustomAlert>

// Auto-dismiss alert
<CustomAlert
  variant="success"
  title="Auto-dismiss"
  autoDismiss={5000}
  onDismiss={() => console.log('Auto dismissed')}
>
  This alert will dismiss automatically.
</CustomAlert>

// Analytics tracking
<CustomAlert
  analytics={{
    event: 'alert_interaction',
    properties: { component: 'custom_alert' }
  }}
>
  Tracked alert
</CustomAlert>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui Alert Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">variant</h4>
                      <p className="text-sm text-muted-foreground">
                        'default' | 'destructive' - Alert style variant
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">children</h4>
                      <p className="text-sm text-muted-foreground">
                        ReactNode - Alert content
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
                  <CardTitle>Custom Alert Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">variant</h4>
                      <p className="text-sm text-muted-foreground">
                        Extends shadcn/ui + 'success' | 'warning' | 'info'
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">dismissible</h4>
                      <p className="text-sm text-muted-foreground">
                        boolean - Show dismiss button
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">action</h4>
                      <p className="text-sm text-muted-foreground">
                        object - Action button configuration
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">autoDismiss</h4>
                      <p className="text-sm text-muted-foreground">
                        number - Auto-dismiss after milliseconds
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        object - Track alert interactions
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
                      Proper ARIA roles and labels
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
                      Announces alert content and actions
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

export default AlertPage;
