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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 z-30">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
            <span className="text-lg lg:text-xl font-bold text-blue-600">Therap</span>
          </div>
          <div className="hidden md:block text-sm text-gray-600">Dashboard | Quick Links</div>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
          </Button>
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-sm text-gray-600">Starline Community Services</span>
            <span className="text-sm text-gray-600">Richard Gichuki, Operations Manager</span>
          </div>
          <Button variant="outline" size="sm" className="text-xs lg:text-sm">
            Logout
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 bottom-0 w-64 lg:w-72 bg-white border-r border-gray-200 overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
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
                onClick={() => {
                  setSelectedModule(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedModule === item.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </div>
                {item.count && (
                  <Badge variant="secondary" className="text-xs">
                    {item.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72 mt-16 overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Content Area */}
          <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6">
                <TabsTrigger value="general" className="text-xs lg:text-sm">
                  General
                </TabsTrigger>
                <TabsTrigger value="care" className="text-xs lg:text-sm">
                  Care
                </TabsTrigger>
                <TabsTrigger value="permissions" className="text-xs lg:text-sm">
                  Permissions
                </TabsTrigger>
                <TabsTrigger value="staff" className="text-xs lg:text-sm">
                  Staff Roles
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <CardTitle className="text-center lg:text-left text-xl text-blue-600">
                        General Administration
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" className="text-xs">
                          <Plus className="h-4 w-4 mr-2" />
                          Add New
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Upload className="h-4 w-4 mr-2" />
                          Import
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {generalAdminItems.map((item, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {item.actions.length} actions
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                              <p className="text-xs text-gray-500">Last updated: {item.lastUpdated}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.actions.map((action, actionIndex) => (
                                <Button
                                  key={actionIndex}
                                  variant="link"
                                  size="sm"
                                  className="text-blue-600 p-1 h-auto text-xs"
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
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <CardTitle className="text-center lg:text-left text-xl text-blue-600">Care Management</CardTitle>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" className="text-xs">
                          <Plus className="h-4 w-4 mr-2" />
                          New Entry
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {careModules.map((item, index) => (
                        <div
                          key={index}
                          className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
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
                                className="text-blue-600 p-1 h-auto text-xs"
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
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <CardTitle>User Permissions Configuration</CardTitle>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button size="sm" className="text-xs">
                          Save Changes
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          Reset to Default
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {permissionModules.map((module, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-700 mb-3">{module.name}</h3>
                          <div className="space-y-3">
                            {module.permissions.map((permission, permIndex) => (
                              <div key={permIndex} className="flex items-center space-x-2">
                                <Checkbox id={`${index}-${permIndex}`} defaultChecked={permission.checked} />
                                <label
                                  htmlFor={`${index}-${permIndex}`}
                                  className="text-sm text-gray-700 cursor-pointer"
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
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <CardTitle>Staff Roles & Management</CardTitle>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="flex items-center space-x-2">
                          <Input
                            placeholder="Search roles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-48 text-sm"
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
                            <TableHead className="min-w-[150px]">Position Title</TableHead>
                            <TableHead className="min-w-[200px] hidden md:table-cell">Department</TableHead>
                            <TableHead className="min-w-[100px] hidden lg:table-cell">Employees</TableHead>
                            <TableHead className="min-w-[120px] hidden xl:table-cell">Salary Range</TableHead>
                            <TableHead className="min-w-[80px]">Status</TableHead>
                            <TableHead className="min-w-[120px]">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredStaffRoles.map((role) => (
                            <TableRow key={role.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{role.title}</div>
                                  <div className="text-sm text-gray-500 md:hidden">{role.department}</div>
                                  <div className="text-xs text-gray-400 mt-1 max-w-xs">{role.description}</div>
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
                                <div className="flex space-x-1">
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
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 space-y-2 sm:space-y-0">
                      <p className="text-sm text-gray-600">
                        Showing {filteredStaffRoles.length} of {staffRoles.length} roles
                      </p>
                      <div className="flex space-x-2">
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

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 p-4 lg:p-6 space-y-4 bg-gray-50 lg:bg-white border-t lg:border-t-0 lg:border-l border-gray-200">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded flex items-center justify-between">
                  Issue Tracking
                  <Badge className="bg-white text-blue-600">5</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  New Issue
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  My Issues (3)
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Urgent Issues (2)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded flex items-center justify-between">
                  SComm
                  <Badge className="bg-white text-blue-600">12</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Inbox (8)
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Sent Items
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Compose
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Drafts (2)
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Custom User Group
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Message Audit
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">Appointments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Today (3)
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Weekly (14)
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Monthly (45)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm bg-blue-600 text-white p-2 rounded">Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  View Schedule
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Print Schedule
                </Button>
                <Button variant="link" className="text-sm text-blue-600 p-0 h-auto justify-start">
                  Search
                </Button>
                <div className="bg-yellow-400 text-center py-3 px-4 rounded mt-4">
                  <div className="font-bold">Tuesday</div>
                  <div className="text-2xl font-bold">17</div>
                  <div className="text-sm">June 2025</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm bg-green-600 text-white p-2 rounded">Recent Activity</CardTitle>
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
                <CardTitle className="text-sm bg-orange-600 text-white p-2 rounded">Upcoming Tasks</CardTitle>
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
    </div>
  )
}

export default App
