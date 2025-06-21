"use client"

import { useState } from "react"
import {
  Users,
  FileText,
  Settings,
  Home,
  Activity,
  Building2,
  Clock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Upload,
  Bell,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function App() {
  const [activeSection, setActiveSection] = useState("general")
  const [selectedModule, setSelectedModule] = useState("admin")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const sidebarItems = [
    { id: "todo", label: "To Do", icon: Clock, count: 5 },
    { id: "individual", label: "Individual", icon: Users, count: 23 },
    { id: "health", label: "Health", icon: Activity, count: 12 },
    { id: "agency", label: "Agency", icon: Building2, count: 8 },
    { id: "admin", label: "Admin", icon: Settings, active: true },
    { id: "reports", label: "Agency Reports", icon: FileText, count: 15 },
    { id: "homepage", label: "Individual Home Page", icon: Home },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const generalAdminItems = [
    {
      name: "Provider",
      actions: ["Preferences", "Password Policy"],
      description: "Manage healthcare providers and their settings",
      lastUpdated: "2 hours ago",
    },
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
      description: "User account management and authentication",
      lastUpdated: "1 day ago",
    },
    {
      name: "Title",
      actions: ["New", "List", "Import from Excel", "Search Imported Excel"],
      description: "Job titles and position management",
      lastUpdated: "3 days ago",
    },
    {
      name: "Change Password",
      actions: ["User List"],
      description: "Password management for all users",
      lastUpdated: "5 hours ago",
    },
    {
      name: "User Privileges",
      actions: ["Manage", "Archive", "Legacy Archive Upto Jul 2011"],
      description: "Role-based access control and permissions",
      lastUpdated: "1 week ago",
    },
    {
      name: "Splash Message",
      actions: ["Create", "Update/Delete"],
      description: "System-wide announcements and notifications",
      lastUpdated: "2 days ago",
    },
    {
      name: "Activity Tracking",
      actions: ["View"],
      description: "Monitor user activities and system usage",
      lastUpdated: "30 minutes ago",
    },
    {
      name: "Caseload",
      actions: ["Manage", "Archive"],
      description: "Patient assignment and workload distribution",
      lastUpdated: "4 hours ago",
    },
    {
      name: "Super Role",
      actions: ["Manage", "Archive", "Legacy Archive"],
      description: "Administrative super user permissions",
      lastUpdated: "1 week ago",
    },
    {
      name: "Agency Wide Role Template",
      actions: ["Manage"],
      description: "Standard role templates across the organization",
      lastUpdated: "2 weeks ago",
    },
    {
      name: "Default Notification Profile",
      actions: ["Configure"],
      description: "System notification preferences and settings",
      lastUpdated: "3 days ago",
    },
    {
      name: "Program",
      actions: ["New", "List", "Import from Excel", "Search Imported Excel"],
      description: "Healthcare program management",
      lastUpdated: "6 hours ago",
    },
    {
      name: "Site",
      actions: ["New", "List"],
      description: "Facility and location management",
      lastUpdated: "1 day ago",
    },
  ]

  const careModules = [
    {
      name: "T-Log",
      actions: ["New", "Search", "Archive"],
      description: "Treatment logs and documentation",
      count: 45,
      priority: "high",
    },
    {
      name: "General Event Reports (GER)",
      actions: ["New", "Search"],
      description: "Incident and event reporting system",
      count: 12,
      priority: "medium",
    },
    {
      name: "GER Resolution",
      actions: ["New", "Unaddressed GERs", "Open Resolutions", "Open Investigations", "Search"],
      description: "Follow-up and resolution tracking",
      count: 8,
      priority: "high",
    },
    {
      name: "Multi-Individual Event (MIE)",
      actions: ["New", "Search"],
      description: "Events affecting multiple patients",
      count: 3,
      priority: "low",
    },
    {
      name: "Witness",
      actions: ["Search"],
      description: "Witness statements and testimonies",
      count: 15,
      priority: "medium",
    },
    {
      name: "Event Summaries",
      actions: ["View"],
      description: "Comprehensive event analysis and summaries",
      count: 28,
      priority: "low",
    },
    {
      name: "ISP Data",
      actions: ["New", "Search", "Report", "Search Report"],
      description: "Individual Service Plan data management",
      count: 67,
      priority: "high",
    },
    {
      name: "ISP Program",
      actions: ["New", "Search", "Acknowledgement Report"],
      description: "Service program planning and tracking",
      count: 34,
      priority: "medium",
    },
    {
      name: "ISP Program Template Library",
      actions: ["New", "Draft", "Approval", "Search"],
      description: "Standardized program templates",
      count: 22,
      priority: "low",
    },
    {
      name: "Global Template Library",
      actions: ["Search ISP Program Template"],
      description: "Organization-wide template repository",
      count: 156,
      priority: "low",
    },
    {
      name: "Behavior Data",
      actions: ["New", "Search", "Report", "Search Report"],
      description: "Behavioral tracking and analysis",
      count: 89,
      priority: "high",
    },
  ]

  const staffRoles = [
    {
      id: 1,
      title: "Administrative Assistant",
      description: "Coordinate office, assist and support administrative staff",
      department: "Administration",
      employeeCount: 8,
      status: "active",
      salary: "$35,000 - $45,000",
    },
    {
      id: 2,
      title: "House Manager",
      description: "Reports to Program Manager",
      department: "Operations",
      employeeCount: 12,
      status: "active",
      salary: "$45,000 - $55,000",
    },
    {
      id: 3,
      title: "Nurse/LPN",
      description: "To facilitate Wellness Coordination services as per Medicaid Waiver Services.",
      department: "Medical",
      employeeCount: 25,
      status: "active",
      salary: "$50,000 - $65,000",
    },
    {
      id: 4,
      title: "Operations Manager",
      description: "Oversees the operations of all the programs and company compliance.",
      department: "Operations",
      employeeCount: 3,
      status: "active",
      salary: "$70,000 - $85,000",
    },
    {
      id: 5,
      title: "Program Coordinator",
      description:
        "The coordinator will oversee services provided to clients living at home with family or individually. Train staff; Attend meeting; review client sheet and assist families to identify staff as needed.",
      department: "Programs",
      employeeCount: 15,
      status: "active",
      salary: "$40,000 - $50,000",
    },
    {
      id: 6,
      title: "Program Manager",
      description: "Supervise programs, reports to Administrative Manager.",
      department: "Programs",
      employeeCount: 6,
      status: "active",
      salary: "$60,000 - $75,000",
    },
    {
      id: 7,
      title: "Receptionist",
      description:
        "Coordinate office, doctors' office, pharmacy, answer phone, filing and any other assignment given by supervisor.",
      department: "Administration",
      employeeCount: 4,
      status: "active",
      salary: "$28,000 - $35,000",
    },
    {
      id: 8,
      title: "Registered Nurse - RN",
      description: "Supervise and oversees clients' wellness coordination.",
      department: "Medical",
      employeeCount: 18,
      status: "active",
      salary: "$65,000 - $80,000",
    },
    {
      id: 9,
      title: "Therap Assistant",
      description: "Help with networking and documentation",
      department: "IT Support",
      employeeCount: 5,
      status: "active",
      salary: "$35,000 - $42,000",
    },
    {
      id: 10,
      title: "Social Worker",
      description: "Provide counseling and support services to clients and families",
      department: "Social Services",
      employeeCount: 12,
      status: "active",
      salary: "$45,000 - $58,000",
    },
  ]

  const permissionModules = [
    {
      name: "ISP Data",
      permissions: [
        { name: "ISP Data View", checked: true },
        { name: "ISP Data Submit", checked: true },
        { name: "ISP Data Update", checked: false },
        { name: "ISP Data Delete", checked: false },
      ],
    },
    {
      name: "ISP Plan",
      permissions: [
        { name: "ISP Plan Submit", checked: false },
        { name: "ISP Plan Approve", checked: false },
        { name: "ISP Plan View", checked: true },
        { name: "ISP Plan Update", checked: false },
        { name: "ISP Plan Delete", checked: false },
        { name: "ISP Plan Review", checked: true },
      ],
    },
    {
      name: "ISP Program",
      permissions: [
        { name: "ISP Program Submit", checked: false },
        { name: "ISP Program Approve", checked: false },
        { name: "ISP Program Update", checked: false },
        { name: "ISP Program Delete", checked: false },
        { name: "ISP Program View", checked: true },
      ],
    },
    {
      name: "ISP Report",
      permissions: [
        { name: "ISP Report", checked: true },
        { name: "ISP Report View", checked: true },
      ],
    },
    {
      name: "Management Summary",
      permissions: [{ name: "Staff Management Summary", checked: false }],
    },
    {
      name: "MAR Configuration",
      permissions: [{ name: "MAR Configuration", checked: false }],
    },
    {
      name: "MAR Configuration",
      permissions: [{ name: "MAR Configuration Approve", checked: false }],
    },
    {
      name: "Medical Information",
      permissions: [
        { name: "Medical Info View", checked: true },
        { name: "Medical Info Edit", checked: false },
        { name: "Medical Info Delete", checked: false },
      ],
    },
    {
      name: "Medication History",
      permissions: [
        { name: "Medication View", checked: true },
        { name: "Medication Add", checked: false },
        { name: "Medication Update", checked: false },
      ],
    },
  ]

  const recentActivities = [
    { user: "Dr. Sarah Johnson", action: "Updated patient ISP", time: "5 minutes ago", type: "update" },
    { user: "Mike Chen", action: "Created new GER report", time: "15 minutes ago", type: "create" },
    { user: "Lisa Rodriguez", action: "Approved medication change", time: "1 hour ago", type: "approve" },
    { user: "James Wilson", action: "Completed staff training", time: "2 hours ago", type: "complete" },
    { user: "Emily Davis", action: "Archived old records", time: "3 hours ago", type: "archive" },
  ]

  const upcomingTasks = [
    { task: "Monthly compliance review", due: "Today", priority: "high" },
    { task: "Staff performance evaluations", due: "Tomorrow", priority: "medium" },
    { task: "Update emergency procedures", due: "This week", priority: "high" },
    { task: "Review medication protocols", due: "Next week", priority: "low" },
    { task: "Quarterly budget planning", due: "Next month", priority: "medium" },
  ]

  const filteredStaffRoles = staffRoles.filter(
    (role) =>
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header - Using flexbox with proper responsive spacing */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-white px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>

          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
            <span className="text-lg font-bold text-blue-600 sm:text-xl">Therap</span>
          </div>

          <div className="hidden text-sm text-gray-600 md:block">Dashboard | Quick Links</div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
          </Button>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="text-sm text-gray-600">Starline Community Services</span>
            <span className="text-sm text-gray-600">Richard Gichuki, Operations Manager</span>
          </div>

          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Using fixed positioning with proper responsive widths */}
        <aside
          className={`fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 transform border-r bg-white transition-transform duration-300 ease-in-out sm:top-16 sm:h-[calc(100vh-4rem)] sm:w-72 lg:translate-x-0 lg:w-80 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto p-4">
            <div className="mb-6 space-y-2">
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

            <nav className="flex-1 space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedModule(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    selectedModule === item.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <Badge variant="secondary" className="ml-2 flex-shrink-0">
                      {item.count}
                    </Badge>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content - Using CSS Grid for layout */}
        <main className="flex-1 lg:ml-80">
          <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-1 sm:min-h-[calc(100vh-4rem)] lg:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_24rem]">
            {/* Content Area */}
            <div className="overflow-y-auto p-4 sm:p-6">
              <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
                <TabsList className="grid h-auto w-full grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="general" className="px-2 py-2 text-xs sm:px-4 sm:text-sm">
                    General
                  </TabsTrigger>
                  <TabsTrigger value="care" className="px-2 py-2 text-xs sm:px-4 sm:text-sm">
                    Care
                  </TabsTrigger>
                  <TabsTrigger value="permissions" className="px-2 py-2 text-xs sm:px-4 sm:text-sm">
                    Permissions
                  </TabsTrigger>
                  <TabsTrigger value="staff" className="px-2 py-2 text-xs sm:px-4 sm:text-sm">
                    Staff Roles
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <CardTitle className="text-xl text-blue-600">General Administration</CardTitle>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add New
                          </Button>
                          <Button variant="outline" size="sm">
                            <Upload className="mr-2 h-4 w-4" />
                            Import
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {generalAdminItems.map((item, index) => (
                          <div key={index} className="rounded-lg border p-4 transition-shadow hover:shadow-sm">
                            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                              <div className="min-w-0 flex-1">
                                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                                  <Badge variant="outline" className="w-fit">
                                    {item.actions.length} actions
                                  </Badge>
                                </div>
                                <p className="mb-2 text-sm text-gray-600">{item.description}</p>
                                <p className="text-xs text-gray-500">Last updated: {item.lastUpdated}</p>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {item.actions.map((action, actionIndex) => (
                                  <Button
                                    key={actionIndex}
                                    variant="link"
                                    size="sm"
                                    className="h-auto p-1 text-xs text-blue-600"
                                  >
                                    {action}
                                  </Button>
                                ))}
                              </div>
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
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <CardTitle className="text-xl text-blue-600">Care Management</CardTitle>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            New Entry
                          </Button>
                          <Button variant="outline" size="sm">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                        {careModules.map((item, index) => (
                          <div key={index} className="rounded-lg border p-4 transition-shadow hover:shadow-sm">
                            <div className="mb-3 flex items-start justify-between">
                              <div className="flex-1">
                                <div className="mb-2 flex items-center gap-2">
                                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                                  <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                                </div>
                                <p className="mb-2 text-sm text-gray-600">{item.description}</p>
                                <div className="text-xs text-gray-500">
                                  <span>{item.count} records</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {item.actions.map((action, actionIndex) => (
                                <Button
                                  key={actionIndex}
                                  variant="link"
                                  size="sm"
                                  className="h-auto p-1 text-xs text-blue-600"
                                >
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
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <CardTitle>User Permissions Configuration</CardTitle>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <Button size="sm">Save Changes</Button>
                          <Button variant="outline" size="sm">
                            Reset to Default
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {permissionModules.map((module, index) => (
                          <div key={index} className="rounded-lg bg-blue-50 p-4">
                            <h3 className="mb-3 font-semibold text-blue-700">{module.name}</h3>
                            <div className="space-y-3">
                              {module.permissions.map((permission, permIndex) => (
                                <div key={permIndex} className="flex items-center gap-2">
                                  <Checkbox id={`${index}-${permIndex}`} defaultChecked={permission.checked} />
                                  <label
                                    htmlFor={`${index}-${permIndex}`}
                                    className="cursor-pointer text-sm text-gray-700"
                                  >
                                    {permission.name}
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
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <CardTitle>Staff Roles & Management</CardTitle>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <div className="flex items-center gap-2">
                            <Input
                              placeholder="Search roles..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full sm:w-48"
                            />
                            <Button variant="outline" size="icon">
                              <Search className="h-4 w-4" />
                            </Button>
                          </div>
                          <Select defaultValue="15">
                            <SelectTrigger className="w-full sm:w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15</SelectItem>
                              <SelectItem value="25">25</SelectItem>
                              <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="min-w-[200px]">Position Title</TableHead>
                              <TableHead className="hidden md:table-cell">Department</TableHead>
                              <TableHead className="hidden lg:table-cell">Employees</TableHead>
                              <TableHead className="hidden xl:table-cell">Salary Range</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredStaffRoles.map((role) => (
                              <TableRow key={role.id}>
                                <TableCell>
                                  <div>
                                    <div className="font-medium">{role.title}</div>
                                    <div className="text-sm text-gray-500 md:hidden">{role.department}</div>
                                    <div className="mt-1 max-w-xs text-xs text-gray-400 line-clamp-2">
                                      {role.description}
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{role.department}</TableCell>
                                <TableCell className="hidden lg:table-cell">
                                  <Badge variant="outline">{role.employeeCount}</Badge>
                                </TableCell>
                                <TableCell className="hidden xl:table-cell text-sm">{role.salary}</TableCell>
                                <TableCell>
                                  <Badge className={getStatusColor(role.status)}>{role.status}</Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-1">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="outline" size="icon" className="h-8 w-8">
                                          <Eye className="h-3 w-3" />
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-md">
                                        <DialogHeader>
                                          <DialogTitle>{role.title}</DialogTitle>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                          <div>
                                            <h4 className="font-medium">Department</h4>
                                            <p className="text-sm text-gray-600">{role.department}</p>
                                          </div>
                                          <div>
                                            <h4 className="font-medium">Description</h4>
                                            <p className="text-sm text-gray-600">{role.description}</p>
                                          </div>
                                          <div>
                                            <h4 className="font-medium">Current Employees</h4>
                                            <p className="text-sm text-gray-600">{role.employeeCount}</p>
                                          </div>
                                          <div>
                                            <h4 className="font-medium">Salary Range</h4>
                                            <p className="text-sm text-gray-600">{role.salary}</p>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                    <Button variant="outline" size="icon" className="h-8 w-8">
                                      <Edit className="h-3 w-3" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="h-8 w-8">
                                      <Trash2 className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="mt-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
                        <p className="text-sm text-gray-600">
                          Showing {filteredStaffRoles.length} of {staffRoles.length} roles
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Using CSS Grid for responsive layout */}
            <div className="border-t bg-gray-50 p-4 lg:border-l lg:border-t-0 lg:bg-white lg:p-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between rounded bg-blue-600 p-2 text-sm text-white">
                      Issue Tracking
                      <Badge className="bg-white text-blue-600">5</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      New Issue
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      My Issues (3)
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Urgent Issues (2)
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between rounded bg-blue-600 p-2 text-sm text-white">
                      SComm
                      <Badge className="bg-white text-blue-600">12</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Inbox (8)
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Sent Items
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Compose
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Drafts (2)
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Custom User Group
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Message Audit
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="rounded bg-blue-600 p-2 text-sm text-white">Appointments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Today (3)
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Weekly (14)
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Monthly (45)
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="rounded bg-blue-600 p-2 text-sm text-white">Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      View Schedule
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Print Schedule
                    </Button>
                    <Button variant="link" className="h-auto justify-start p-0 text-sm text-blue-600">
                      Search
                    </Button>
                    <div className="mt-4 rounded bg-yellow-400 py-3 px-4 text-center">
                      <div className="font-bold">Tuesday</div>
                      <div className="text-2xl font-bold">17</div>
                      <div className="text-sm">June 2025</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="rounded bg-green-600 p-2 text-sm text-white">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentActivities.slice(0, 3).map((activity, index) => (
                      <div key={index} className="text-xs">
                        <div className="font-medium text-gray-900">{activity.user}</div>
                        <div className="text-gray-600">{activity.action}</div>
                        <div className="text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="rounded bg-orange-600 p-2 text-sm text-white">Upcoming Tasks</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingTasks.slice(0, 3).map((task, index) => (
                      <div key={index} className="text-xs">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-gray-900">{task.task}</div>
                          <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                        </div>
                        <div className="text-gray-500">Due: {task.due}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
