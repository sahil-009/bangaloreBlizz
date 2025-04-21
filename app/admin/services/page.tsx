"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  MoreHorizontal,
  Plus,
  Pencil,
  Trash2,
  Globe,
  Database,
  Smartphone,
  Server,
  Search,
  PenTool,
  Calendar,
  MessageSquare,
} from "lucide-react"
import { mockServices } from "@/lib/mock-data"
import type { Service } from "@/lib/types"

const iconOptions = [
  { name: "Globe", icon: <Globe className="h-5 w-5" /> },
  { name: "Database", icon: <Database className="h-5 w-5" /> },
  { name: "Smartphone", icon: <Smartphone className="h-5 w-5" /> },
  { name: "Server", icon: <Server className="h-5 w-5" /> },
  { name: "Search", icon: <Search className="h-5 w-5" /> },
  { name: "PenTool", icon: <PenTool className="h-5 w-5" /> },
  { name: "Calendar", icon: <Calendar className="h-5 w-5" /> },
  { name: "MessageSquare", icon: <MessageSquare className="h-5 w-5" /> },
]

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(mockServices)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "Globe",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleIconChange = (iconName: string) => {
    setFormData((prev) => ({ ...prev, icon: iconName }))
  }

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      icon: formData.icon,
    }
    setServices([...services, newService])
    setIsAddDialogOpen(false)
    resetForm()
  }

  const handleEditService = () => {
    if (!currentService) return

    const updatedServices = services.map((service) =>
      service.id === currentService.id
        ? {
            ...service,
            title: formData.title,
            description: formData.description,
            icon: formData.icon,
          }
        : service,
    )

    setServices(updatedServices)
    setIsEditDialogOpen(false)
    resetForm()
  }

  const handleDeleteService = (id: string) => {
    setServices(services.filter((service) => service.id !== id))
  }

  const openEditDialog = (service: Service) => {
    setCurrentService(service)
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      icon: "Globe",
    })
    setCurrentService(null)
  }

  const getIconComponent = (iconName: string) => {
    const iconOption = iconOptions.find((option) => option.name === iconName)
    return iconOption ? iconOption.icon : <Globe className="h-5 w-5" />
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Service
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Services</CardTitle>
          <CardDescription>Add, edit, or remove services displayed on your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Icon</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <div className="text-primary">{getIconComponent(service.icon)}</div>
                    </TableCell>
                    <TableCell className="font-medium">{service.title}</TableCell>
                    <TableCell className="max-w-md truncate">{service.description}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => openEditDialog(service)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteService(service.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Service Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>Create a new service to display on your website</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Website Development"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the service..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <div className="grid grid-cols-4 gap-2">
                {iconOptions.map((option) => (
                  <Button
                    key={option.name}
                    type="button"
                    variant={formData.icon === option.name ? "default" : "outline"}
                    className="h-10 p-0"
                    onClick={() => handleIconChange(option.name)}
                  >
                    <div className="flex items-center justify-center">{option.icon}</div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddService}>Add Service</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Service Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>Make changes to the selected service</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-title">Service Title</Label>
              <Input id="edit-title" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-description">Description</Label>
              <Textarea
                id="edit-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <div className="grid grid-cols-4 gap-2">
                {iconOptions.map((option) => (
                  <Button
                    key={option.name}
                    type="button"
                    variant={formData.icon === option.name ? "default" : "outline"}
                    className="h-10 p-0"
                    onClick={() => handleIconChange(option.name)}
                  >
                    <div className="flex items-center justify-center">{option.icon}</div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditService}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
