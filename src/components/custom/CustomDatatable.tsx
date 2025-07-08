import React from "react";
import { cn } from "@/lib/utils";

export interface CustomDatatableProps {
  columns: Array<{ key: string; label: string }>;
  data: Array<Record<string, any>>;
  className?: string;
  analytics?: {
    event: string;
    properties?: Record<string, any>;
  };
}

const CustomDatatable: React.FC<CustomDatatableProps> = ({
  columns,
  data,
  className,
  analytics,
}) => {
  React.useEffect(() => {
    if (analytics) {
      try {
        console.log(
          "Datatable Analytics Event:",
          analytics.event,
          analytics.properties
        );
      } catch (error) {
        console.error("Analytics error:", error);
      }
    }
  }, [analytics]);

  return (
    <div
      className={cn("overflow-x-auto rounded-lg border shadow-sm", className)}
    >
      <table className="min-w-full divide-y divide-muted">
        <thead className="bg-muted">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 text-left font-semibold text-xs uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-muted">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-muted/50">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-sm">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CustomDatatable };
