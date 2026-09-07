"use client"

import Link from "next/link"
import Image from "next/image"
import { BookOpen } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const enrolledCourses = [
  { id: 1, title: "Web Development Bootcamp", instructor: "Dr. John Mwangi", image: "/images/class-webdev.png", progress: 75, level: "Advanced Secondary" },
  { id: 2, title: "Data Science with Python", instructor: "Sarah K.", image: "/images/class-datascience.png", progress: 40, level: "University" },
  { id: 3, title: "Digital Marketing Strategy", instructor: "Prof. A. Hamdan", image: "/images/class-marketing.png", progress: 20, level: "College" },
  { id: 4, title: "Mobile App Development", instructor: "Grace Nkomo", image: "/images/class-mobiledev.png", progress: 60, level: "University" },
  { id: 5, title: "Business Communication", instructor: "David Ochieng", image: "/images/class-business.png", progress: 85, level: "College" },
  { id: 6, title: "Introduction to AI", instructor: "Dr. Amina Juma", image: "/images/class-ai.png", progress: 10, level: "University" },
]

export default function DashboardCoursesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">My Courses</h1>
        <p className="mt-1 text-sm text-muted-foreground">Continue learning from where you left off.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {enrolledCourses.map((course) => (
          <Link
            key={course.id}
            href="/courses"
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium text-primary">{course.level}</p>
              <h3 className="mt-1 text-base font-semibold text-foreground">{course.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{course.instructor}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-teal" style={{ width: `${course.progress}%` }} />
                </div>
                <span className="text-xs font-semibold text-teal">{course.progress}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
