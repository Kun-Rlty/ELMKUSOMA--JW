"use client"

import { Bookmark } from "lucide-react"

const bookmarks = [
  { id: 1, title: "Introduction to Machine Learning", type: "Course", saved: "2 days ago" },
  { id: 2, title: "Advanced JavaScript Patterns", type: "Course", saved: "5 days ago" },
  { id: 3, title: "Business Plan Template", type: "Material", saved: "1 week ago" },
  { id: 4, title: "Data Structures in Python", type: "Course", saved: "1 week ago" },
  { id: 5, title: "Public Speaking Tips", type: "Material", saved: "2 weeks ago" },
]

export default function DashboardBookmarksPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Bookmarks</h1>
        <p className="mt-1 text-sm text-muted-foreground">Access your saved courses and materials.</p>
      </div>

      {bookmarks.length > 0 ? (
        <div className="space-y-3">
          {bookmarks.map((b) => (
            <div key={b.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bookmark className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">{b.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{b.type} · Saved {b.saved}</p>
              </div>
              <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20">
                Open
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
          <Bookmark className="size-10 text-muted-foreground/50" />
          <p className="mt-4 text-sm font-medium text-foreground">No bookmarks yet</p>
          <p className="mt-1 text-sm text-muted-foreground">Save courses and materials for quick access.</p>
        </div>
      )}
    </div>
  )
}
