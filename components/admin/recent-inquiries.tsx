"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockInquiries } from "@/lib/mock-data"

export function RecentInquiries() {
  // Get only the 5 most recent inquiries
  const recentInquiries = [...mockInquiries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-8">
      {recentInquiries.map((inquiry) => (
        <div key={inquiry.id} className="flex items-start">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/10 text-primary">{inquiry.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium">{inquiry.name}</p>
            <p className="text-sm text-gray-500 truncate max-w-[300px]">{inquiry.message}</p>
            <p className="text-xs text-gray-500">{new Date(inquiry.date).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
