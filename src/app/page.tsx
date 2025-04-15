import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider} from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>Simer Package</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>AuthCore</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>DataCore</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>APICore</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>StorageCore</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>EventCore</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <p>Footer</p>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Simer Package</CardTitle>
            <CardDescription>
              Modular core-as-a-service that encapsulates basic and reusable
              functionalities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is a NextJS starter built with Firebase Studio, leveraging
              ShadCN components.
            </p>
          </CardContent>
        </Card>
      </main>
    </SidebarProvider>
  );
}
