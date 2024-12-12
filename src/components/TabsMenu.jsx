import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsMenu = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px] pt-4">
      <TabsList>
        <TabsTrigger value="account">
          <a href="#work">About Me</a>
        </TabsTrigger>
        <TabsTrigger value="password">
          <a href="#work">Projects</a>
        </TabsTrigger>
        <TabsTrigger value="password">
          <a href="#work">Contact</a>
        </TabsTrigger>
        <TabsTrigger value="password">
          <a href="#work">Resume</a>
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent> */}
      {/* <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};

export default TabsMenu;
