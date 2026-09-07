"use client"

import { BarChart3 } from "lucide-react"

const courses = [
  { name: "Web Development Bootcamp", progress: 75, hoursSpent: 32, lessonsCompleted: 18, totalLessons: 24 },
  { name: "Data Science with Python", progress: 40, hoursSpent: 16, lessonsCompleted: 8, totalLessons: 20 },
  { name: "Digital Marketing Strategy", progress: 20, hoursSpent: 8, lessonsCompleted: 4, totalLessons: 16 },
  { name: "Mobile App Development", progress: 60, hoursSpent: 24, lessonsCompleted: 12, totalLessons: 20 },
  { name: "Business Communication", progress: 85, hoursSpent: 20, lessonsCompleted: 17, totalLessons: 20 },
  { name: "Introduction to AI", progress: 10, hoursSpent: 4, lessonsCompleted: 2, totalLessons: 20 },
]

const stats = [
  { label: "Total Hours", value: "104h" },
  { label: "Lessons Done", value: "61" },
  { label: "Avg Progress", value: "48%" },
  { label: "Streak", value: "12 days" },
]

export default function DashboardProgressPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">My Progress</h1>
        <p className="mt-1 text-sm text-muted-foreground">Track your learning journey across all courses.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((c) => (
          <div key={c.name} className="rounded-2xl border border-border bg-card p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
              <span className="text-sm font-bold text-teal">{c.progress}%</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-teal" style={{ width: `${c.progress}%` }} />
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{c.hoursSpent}h spent</span>
              <span>{c.lessonsCompleted}/{c.totalLessons} lessons</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
