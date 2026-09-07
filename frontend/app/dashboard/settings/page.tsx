"use client"

import { useState } from "react"
import { Settings } from "lucide-react"

export default function DashboardSettingsPage() {
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your account preferences.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Notifications */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h2 className="text-base font-semibold text-foreground">Notifications</h2>
          <div className="mt-4 space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates about courses and classes</p>
              </div>
              <input type="checkbox" defaultChecked className="size-4 rounded border-border accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Live class reminders</p>
                <p className="text-xs text-muted-foreground">Get notified before live classes start</p>
              </div>
              <input type="checkbox" defaultChecked className="size-4 rounded border-border accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Assignment deadlines</p>
                <p className="text-xs text-muted-foreground">Reminders before assignment due dates</p>
              </div>
              <input type="checkbox" defaultChecked className="size-4 rounded border-border accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Marketing emails</p>
                <p className="text-xs text-muted-foreground">News about new features and promotions</p>
              </div>
              <input type="checkbox" className="size-4 rounded border-border accent-primary" />
            </label>
          </div>
        </div>

        {/* Privacy */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
          <h2 className="text-base font-semibold text-foreground">Privacy</h2>
          <div className="mt-4 space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Show profile to others</p>
                <p className="text-xs text-muted-foreground">Allow other learners to see your profile</p>
              </div>
              <input type="checkbox" defaultChecked className="size-4 rounded border-border accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Show learning activity</p>
                <p className="text-xs text-muted-foreground">Display your progress on your profile</p>
              </div>
              <input type="checkbox" className="size-4 rounded border-border accent-primary" />
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-destructive/30 bg-card p-6 shadow-xs">
          <h2 className="text-base font-semibold text-destructive">Danger Zone</h2>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Delete account</p>
              <p className="text-xs text-muted-foreground">Permanently delete your account and all data</p>
            </div>
            <button type="button" className="h-9 rounded-lg border border-destructive/30 px-4 text-xs font-medium text-destructive hover:bg-destructive/5">
              Delete Account
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="h-11 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Save Settings
          </button>
          {saved && <span className="text-sm text-teal font-medium">Settings saved!</span>}
        </div>
      </form>
    </div>
  )
}
