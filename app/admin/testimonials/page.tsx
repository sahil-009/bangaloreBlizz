"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
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
import { MoreHorizontal, Plus, Pencil, Trash2, Upload, Star } from "lucide-react"
import { mockTestimonials } from "@/lib/mock-data"
import type { Testimonial } from "@/lib/types"

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: "",
    quote: "",
    stars: 5,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleStarRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, stars: rating }))
  }

  const handleAddTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      role: formData.role,
      image: formData.image || "/placeholder.svg?height=200&width=200",
      quote: formData.quote,
      stars: formData.stars,
    }
    setTestimonials([...testimonials, newTestimonial])
    setIsAddDialogOpen(false)
    resetForm()
  }

  const handleEditTestimonial = () => {
    if (!currentTestimonial) return

    const updatedTestimonials = testimonials.map((testimonial) =>
      testimonial.id === currentTestimonial.id
        ? {
            ...testimonial,
            name: formData.name,
            role: formData.role,
            image: formData.image,
            quote: formData.quote,
            stars: formData.stars,
          }
        : testimonial,
    )

    setTestimonials(updatedTestimonials)
    setIsEditDialogOpen(false)
    resetForm()
  }

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id))
  }

  const openEditDialog = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial)
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      image: testimonial.image,
      quote: testimonial.quote,
      stars: testimonial.stars,
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      image: "",
      quote: "",
      stars: 5,
    })
    setCurrentTestimonial(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Testimonials</CardTitle>
          <CardDescription>Add, edit, or remove client testimonials from your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Quote</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell>
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{testimonial.name}</TableCell>
                    <TableCell>{testimonial.role}</TableCell>
                    <TableCell>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonial.stars ? "fill-[#FFB800] text-[#FFB800]" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{testimonial.quote}</TableCell>
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
                          <DropdownMenuItem onClick={() => openEditDialog(testimonial)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteTestimonial(testimonial.id)}
                          >
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

      {/* Add Testimonial Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Testimonial</DialogTitle>
            <DialogDescription>Add a new client testimonial to your website</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Client Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Dr. Arun Kumar"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role/Profession</Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="e.g., Dentist"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote">Testimonial</Label>
              <Textarea
                id="quote"
                name="quote"
                value={formData.quote}
                onChange={handleInputChange}
                placeholder="What the client said about your service..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Button
                    key={rating}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8"
                    onClick={() => handleStarRatingChange(rating)}
                  >
                    <Star className={rating <= formData.stars ? "fill-[#FFB800] text-[#FFB800]" : "text-gray-300"} />
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Avatar URL</Label>
              <div className="flex space-x-2">
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="/placeholder.svg?height=200&width=200"
                />
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">Leave empty to use a placeholder image</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Testimonial Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
            <DialogDescription>Make changes to the selected testimonial</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Client Name</Label>
              <Input id="edit-name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-role">Role/Profession</Label>
              <Input id="edit-role" name="role" value={formData.role} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-quote">Testimonial</Label>
              <Textarea id="edit-quote" name="quote" value={formData.quote} onChange={handleInputChange} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Button
                    key={rating}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8"
                    onClick={() => handleStarRatingChange(rating)}
                  >
                    <Star className={rating <= formData.stars ? "fill-[#FFB800] text-[#FFB800]" : "text-gray-300"} />
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-image">Avatar URL</Label>
              <div className="flex space-x-2">
                <Input id="edit-image" name="image" value={formData.image} onChange={handleInputChange} />
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditTestimonial}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
