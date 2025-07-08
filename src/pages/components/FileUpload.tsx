import React, { useState } from "react";
import { CustomFileUpload } from "@/components/custom/CustomFileUpload";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const FileUploadPage = () => {
  const [activeTab, setActiveTab] = useState("custom");
  const [uploaded, setUploaded] = useState<File[]>([]);

  return (
    <div className="h-[93vh] flex flex-col">
      {/* Header - Fixed height */}
      <div className="flex-shrink-0 p-6 pb-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">File Upload</h1>
          <p className="text-muted-foreground">
            Upload files with drag-and-drop, progress, and analytics. File
            uploaders are used for importing data or assets.
          </p>
        </div>
      </div>

      {/* Fixed Tabs */}
      <div className="flex-shrink-0 px-6 pb-4 bg-background z-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="custom">
              UIEngine Custom File Upload
            </TabsTrigger>
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
                <CardTitle>UIEngine Custom File Upload</CardTitle>
                <CardDescription>
                  Enhanced file upload with drag-and-drop, analytics, and
                  enterprise features.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <CustomFileUpload
                  onUpload={setUploaded}
                  analytics={{
                    event: "file_uploaded",
                    properties: { component: "custom_file_upload" },
                  }}
                  maxSizeMB={5}
                  multiple
                />
                {uploaded.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">
                      Uploaded Files
                    </h4>
                    <ul className="text-xs">
                      {uploaded.map((file) => (
                        <li key={file.name}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom File Upload Code Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import { CustomFileUpload } from "@/components/custom/CustomFileUpload"

<CustomFileUpload
  onUpload={setUploaded}
  analytics={{ event: "file_uploaded" }}
  maxSizeMB={5}
  multiple
/>`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="props" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>File Upload Props & Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">CustomFileUpload</h4>
                    <ul className="text-xs list-disc ml-4">
                      <li>onUpload, analytics, maxSizeMB, multiple, accept</li>
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

export default FileUploadPage;
