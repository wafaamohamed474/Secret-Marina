"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
}

interface BookingTabsProps {
  tabs: TabItem[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function BookingTabs({
  tabs,
  selectedValue,
  onChange,
}: BookingTabsProps) {
  console.log("selected Val", selectedValue);

  return (
    <Tabs
      value={selectedValue || tabs[0]?.value}
      onValueChange={onChange}
      className="w-full gap-10 flex flex-col items-center"
    >
      {/* Tabs Header */}
      <TabsList className="flex gap-2 md:gap-3 lg:gap-5 overflow-x-auto bg-(--card-bg) p-1 rounded-full h-12 w-full md:w-fit md:h-16 lg:h-20 border border-(--primary)">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "flex-1 whitespace-nowrap  p-2 md:px-6 lg:px-10  md:py-1 rounded-full transition-colors border border-(--primary) text-xs md:text-base font-bold",
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
