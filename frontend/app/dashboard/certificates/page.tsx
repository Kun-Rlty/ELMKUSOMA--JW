"use client"

import Link from "next/link"
import { Award, Download } from "lucide-react"

const certificates = [
  { id: "ELM-CERT-2026-001", course: "HTML & CSS Basics", date: "Aug 2026", grade: "A", skills: ["HTML5", "CSS3", "Responsive Design"] },
  { id: "ELM-CERT-2026-002", course: "Introduction to Python", date: "Jul 2026", grade: "B+", skills: ["Python", "Data Types", "Loops"] },
]

export default function DashboardCertificatesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">My Certificates</h1>
          <p className="mt-1 text-sm text-muted-foreground">View and download your earned certificates.</p>
        </div>
        <Link href="/certificates/verify" className="text-sm font-medium text-primary hover:underline">
          Verify a Certificate
        </Link>
      </div>

      {certificates.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                  <Award className="size-6 text-orange" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-foreground">{cert.course}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">ID: {cert.id}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">Grade: {cert.grade}</span>
                    <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{cert.date}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="rounded bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 text-xs font-medium text-foreground hover:bg-muted">
                  <Download className="size-3.5" /> Download PDF
                </button>
                <Link href={`/certificates/verify`} className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 text-xs font-medium text-foreground hover:bg-muted">
                  Share
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 py-20 text-center">
          <Award className="size-10 text-muted-foreground/50" />
          <p className="mt-4 text-sm font-medium text-foreground">No certificates yet</p>
          <p className="mt-1 text-sm text-muted-foreground">Complete courses to earn certificates.</p>
        </div>
      )}
    </div>
  )
}
