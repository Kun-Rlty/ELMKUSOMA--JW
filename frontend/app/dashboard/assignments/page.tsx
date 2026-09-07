"use client"

import { FileText, CheckCircle, Clock } from "lucide-react"

const assignments = [
  { id: 1, title: "HTML & CSS Portfolio Project", course: "Web Development Bootcamp", due: "Sep 12, 2026", status: "pending", icon: Clock },
  { id: 2, title: "Python Data Analysis Report", course: "Data Science with Python", due: "Sep 15, 2026", status: "pending", icon: Clock },
  { id: 3, title: "Marketing Plan Presentation", course: "Digital Marketing Strategy", due: "Sep 10, 2026", status: "completed", icon: CheckCircle },
  { id: 4, title: "API Integration Exercise", course: "Mobile App Development", due: "Sep 18, 2026", status: "pending", icon: Clock },
  { id: 5, title: "Business Report Writing", course: "Business Communication", due: "Sep 8, 2026", status: "completed", icon: CheckCircle },
]

export default function DashboardAssignmentsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Assignments</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track your assignments and submissions.</p>
      </div>

      <div className="space-y-3">
        {assignments.map((a) => (
          <div key={a.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${a.status === "completed" ? "bg-teal/10 text-teal" : "bg-orange/10 text-orange"}`}>
              <a.icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">{a.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{a.course}</p>
            </div>
            <div className="text-right">
              <p className={`text-xs font-medium ${a.status === "completed" ? "text-teal" : "text-orange"}`}>
                {a.status === "completed" ? "Completed" : `Due ${a.due}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
