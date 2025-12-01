"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

export default function CustomTabs({
  tabs,
  defaultValue,
}: {
  tabs: TabItem[];
  defaultValue?: string;
}) {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.value}
      className="w-full py-5 gap-10 flex flex-col items-center"
    >
      {/* Tabs Header */}
      <TabsList className="flex gap-5 overflow-x-auto ">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "flex-1 whitespace-nowrap px-4 py-2 rounded-md transition-colors",
              "bg-(--background) text-(--primary)",
              "data-[state=active]:bg-(--primary) data-[state=active]:text-white"
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="w-full">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
