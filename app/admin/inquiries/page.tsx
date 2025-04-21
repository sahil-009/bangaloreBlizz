"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MoreHorizontal, Search, Mail, Trash2, CheckCircle, AlertCircle } from "lucide-react"
import { mockInquiries } from "@/lib/mock-data"
import type { Inquiry } from "@/lib/types"

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

  const filteredInquiries = inquiries.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleStatusChange = (id: string, status: "new" | "responded" | "archived") => {
    setInquiries(inquiries.map((inquiry) => (inquiry.id === id ? { ...inquiry, status } : inquiry)))
  }

  const handleDelete = (id: string) => {
    setInquiries(inquiries.filter((inquiry) => inquiry.id !== id))
  }

  const viewInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry)
    setIsViewDialogOpen(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inquiries</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
          <CardDescription>Manage and respond to inquiries from your website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search inquiries..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="ml-2 flex space-x-2">
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInquiries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      No inquiries found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.name}</TableCell>
                      <TableCell>{inquiry.email}</TableCell>
                      <TableCell>{new Date(inquiry.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.status === "new"
                              ? "default"
                              : inquiry.status === "responded"
                                ? "success"
                                : "secondary"
                          }
                        >
                          {inquiry.status === "new" && "New"}
                          {inquiry.status === "responded" && "Responded"}
                          {inquiry.status === "archived" && "Archived"}
                        </Badge>
                      </TableCell>
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
                            <DropdownMenuItem onClick={() => viewInquiry(inquiry)}>
                              <AlertCircle className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(inquiry.id, "responded")}>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Mark as Responded
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(inquiry.id, "archived")}>
                              <Mail className="mr-2 h-4 w-4" />
                              Archive
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(inquiry.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedInquiry && (
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Inquiry Details</DialogTitle>
              <DialogDescription>Submitted on {new Date(selectedInquiry.date).toLocaleString()}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 font-medium">Name:</div>
                <div className="col-span-3">{selectedInquiry.name}</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 font-medium">Email:</div>
                <div className="col-span-3">{selectedInquiry.email}</div>
              </div>
              {selectedInquiry.whatsapp && (
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 font-medium">WhatsApp:</div>
                  <div className="col-span-3">{selectedInquiry.whatsapp}</div>
                </div>
              )}
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 font-medium">Message:</div>
                <div className="col-span-3 whitespace-pre-wrap">{selectedInquiry.message}</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 font-medium">Status:</div>
                <div className="col-span-3">
                  <Badge
                    variant={
                      selectedInquiry.status === "new"
                        ? "default"
                        : selectedInquiry.status === "responded"
                          ? "success"
                          : "secondary"
                    }
                  >
                    {selectedInquiry.status === "new" && "New"}
                    {selectedInquiry.status === "responded" && "Responded"}
                    {selectedInquiry.status === "archived" && "Archived"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  handleDelete(selectedInquiry.id)
                  setIsViewDialogOpen(false)
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
              <Button
                onClick={() => {
                  window.location.href = `mailto:${selectedInquiry.email}?subject=Re: Your inquiry at Sahil.dev`
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Reply via Email
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
