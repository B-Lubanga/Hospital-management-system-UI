"use client"

import { useState } from "react"
import { Users, FileText, Settings, Home, Activity, Building2, Clock, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HospitalManagementSystem() {
  const [activeSection, setActiveSection] = useState("general")
  const [selectedModule, setSelectedModule] = useState("admin")

  const sidebarItems = [
    { id: "todo", label: "To Do", icon: Clock },
    { id: "individual", label: "Individual", icon: Users },
    { id: "health", label: "Health", icon: Activity },
    { id: "agency", label: "Agency", icon: Building2 },
    { id: "admin", label: "Admin", icon: Settings, active: true },
    { id: "reports", label: "Agency Reports", icon: FileText },
    { id: "homepage", label: "Individual Home Page", icon: Home },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const generalAdminItems = [
    { name: "Provider", actions: ["Preferences", "Password Policy"] },
    {
      name: "User",
      actions: [
        "New",
        "List",
        "Import from Excel",
        "Search Imported Excel",
        "Assign External System ID",
        "Self Password Reset",
      ],
    },
    { name: "Title", actions: ["New", "List", "Import from Excel", "Search Imported Excel"] },
    { name: "Change Password", actions: ["User List"] },
    { name: "User Privileges", actions: ["Manage", "Archive", "Legacy Archive Upto Jul 2011"] },
    { name: "Splash Message", actions: ["Create", "Update/Delete"] },
    { name: "Activity Tracking", actions: ["View"] },
    { name: "Caseload", actions: ["Manage", "Archive"] },
    { name: "Super Role", actions: ["Manage", "Archive", "Legacy Archive"] },
    { name: "Agency Wide Role Template", actions: ["Manage"] },
    { name: "Default Notification Profile", actions: ["Configure"] },
    { name: "Program", actions: ["New", "List", "Import from Excel", "Search Imported Excel"] },
    { name: "Site", actions: ["New", "List"] },
  ]

  const careModules = [
    { name: "T-Log", actions: ["New", "Search", "Archive"] },
    { name: "General Event Reports (GER)", actions: ["New", "Search"] },
    {
      name: "GER Resolution",
      actions: ["New", "Unaddressed GERs", "Open Resolutions", "Open Investigations", "Search"],
    },
    { name: "Multi-Individual Event (MIE)", actions: ["New", "Search"] },
    { name: "Witness", actions: ["Search"] },
    { name: "Event Summaries", actions: ["View"] },
    { name: "ISP Data", actions: ["New", "Search", "Report", "Search Report"] },
    { name: "ISP Program", actions: ["New", "Search", "Acknowledgement Report"] },
    { name: "ISP Program Template Library", actions: ["New", "Draft", "Approval", "Search"] },
    { name: "Global Template Library", actions: ["Search ISP Program Template"] },
    { name: "Behavior Data", actions: ["New", "Search", "Report", "Search Report"] },
  ]

  const staffRoles = [
    { title: "Administrative Assistant", description: "Coordinate office, assist and support administrative staff" },
    { title: "House Manager", description: "Reports to Program Manager" },
    {
      title: "Nurse/LPN",
      description: "To facilitate Wellness Coordination services as per Medicaid Waiver Services.",
    },
    { title: "Operations Manager", description: "Oversees the operations of all the programs and company compliance." },
    {
      title: "Program Coordinator",
      description:
        "The coordinator will oversee services provided to clients living at home with family or individually. Train staff; Attend meeting; review client sheet and assist families to identify staff as needed.",
    },
    { title: "Program Manager", description: "Supervise programs, reports to Administrative Manager." },
    {
      title: "Receptionist",
      description:
        "Coordinate office, doctors' office, pharmacy, answer phone, filing and any other assignment given by supervisor.",
    },
    { title: "Registered Nurse - RN", description: "Supervise and oversees clients' wellness coordination." },
    { title: "Therap Assistant", description: "Help with networking and documentation" },
  ]

  const permissionModules = [
    {
      name: "ISP Data",
      permissions: ["ISP Data View", "ISP Data Submit", "ISP Data Update", "ISP Data Delete"],
    },
    {
      name: "ISP Plan",
      permissions: [
        "ISP Plan Submit",
        "ISP Plan Approve",
        "ISP Plan View",
        "ISP Plan Update",
        "ISP Plan Delete",
        "ISP Plan Review",
      ],
    },
    {
      name: "ISP Program",
      permissions: [
        "ISP Program Submit",
        "ISP Program Approve",
        "ISP Program Update",
        "ISP Program Delete",
        "ISP Program View",
      ],
    },
    {
      name: "ISP Report",
      permissions: ["ISP Report", "ISP Report View"],
    },
    {
      name: "Management Summary",
      permissions: ["Staff Management Summary"],
    },
    {
      name: "MAR Configuration",
      permissions: ["MAR Configuration Approve"],
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600">Therap</span>
          </div>
          <div className="text-sm text-gray-600">Dashboard | Quick Links</div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Starline Community Services</span>
          <span className="text-sm text-gray-600">Richard Gichuki, Operations Manager</span>
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-2 mb-6">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Program:</span> No Program Selected
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Profile:</span> Initial
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Module:</span> Search
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedModule(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedModule === item.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 mt-16">
        <div className="flex">
          {/* Content Area */}
          <div className="flex-1 p-6">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="permissions">Permissions</TabsTrigger>
                <TabsTrigger value="staff">Staff Roles</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-xl text-blue-600">General</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {generalAdminItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                          <div className="font-medium text-gray-700">{item.name}</div>
                          <div className="flex flex-wrap gap-2">
                            {item.actions.map((action, actionIndex) => (
                              <Button key={actionIndex} variant="link" size="sm" className="text-blue-600 p-0 h-auto">
                                {action}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="care" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-xl text-blue-600">Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {careModules.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                          <div className="font-medium text-gray-700">{item.name}</div>
                          <div className="flex flex-wrap gap-2">
                            {item.actions.map((action, actionIndex) => (
                              <Button key={actionIndex} variant="link" size="sm" className="text-blue-600 p-0 h-auto">
                                {action}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="permissions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Permissions Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {permissionModules.map((module, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-700 mb-3">{module.name}</h3>
                          <div className="space-y-2">
                            {module.permissions.map((permission, permIndex) => (
                              <div key={permIndex} className="flex items-center space-x-2">
                                <Checkbox id={`${index}-${permIndex}`} />
                                <label htmlFor={`${index}-${permIndex}`} className="text-sm text-gray-700">
                                  {permission}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="staff" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Staff Roles & Descriptions</CardTitle>
                    <div className="flex justify-between items-center">
                      <Select defaultValue="15">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15</SelectItem>
                          <SelectItem value="25">25</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                      </Select>
                      <span className="text-sm text-gray-600">Records</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position Title</TableHead>
                          <TableHead>Job Description</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staffRoles.map((role, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{role.title}</TableCell>
                            <TableCell className="max-w-md">{role.description}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 p-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">Issue Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">New</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">My Issues</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">SComm</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Inbox</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Sent Items</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Compose</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Drafts</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Custom User Group</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Message Audit</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Delete Message Content</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">Appointments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Today (3)</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Weekly (14)</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">View</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Print Schedule</div>
                <div className="text-sm text-blue-600 cursor-pointer hover:underline">Search</div>
                <div className="bg-yellow-400 text-center py-2 px-4 rounded mt-4">
                  <div className="font-bold">Tuesday</div>
                  <div className="text-2xl font-bold">17</div>
                  <div className="text-sm">June 2025</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
