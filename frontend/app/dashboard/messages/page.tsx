"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

const contacts = [
  { id: 1, name: "Dr. John Mwangi", role: "Instructor", lastMessage: "Great work on the assignment!", time: "2h ago", unread: 1 },
  { id: 2, name: "Sarah K.", role: "Instructor", lastMessage: "Your project proposal looks good.", time: "Yesterday", unread: 0 },
  { id: 3, name: "Support Team", role: "Support", lastMessage: "Your ticket has been resolved.", time: "3 days ago", unread: 0 },
]

const initialMessages = [
  { id: 1, sender: "Dr. John Mwangi", text: "Hi! How is the project going?", time: "10:30 AM" },
  { id: 2, sender: "You", text: "Going well! I have a question about the CSS grid section.", time: "10:35 AM" },
  { id: 3, sender: "Dr. John Mwangi", text: "Great work on the assignment! Keep it up.", time: "10:42 AM" },
]

export default function DashboardMessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!newMessage.trim()) return
    setMessages([...messages, { id: messages.length + 1, sender: "You", text: newMessage, time: "Now" }])
    setNewMessage("")
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Messages</h1>
        <p className="mt-1 text-sm text-muted-foreground">Chat with instructors and support.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Contact List */}
        <div className="space-y-2">
          {contacts.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedContact(c)}
              className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors ${selectedContact.id === c.id ? "bg-primary/10 text-primary" : "bg-card text-foreground hover:bg-muted"}`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                {c.name[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium">{c.name}</p>
                  <span className="text-[10px] text-muted-foreground">{c.time}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{c.lastMessage}</p>
              </div>
              {c.unread > 0 && (
                <span className="size-5 shrink-0 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex flex-col rounded-2xl border border-border bg-card shadow-xs">
          <div className="flex items-center gap-3 border-b border-border p-4">
            <div className="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
              {selectedContact.name[0]}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{selectedContact.name}</p>
              <p className="text-xs text-muted-foreground">{selectedContact.role}</p>
            </div>
          </div>

          <div className="flex-1 space-y-4 p-4" style={{ minHeight: "300px" }}>
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === "You" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm ${m.sender === "You" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                  <p>{m.text}</p>
                  <p className="mt-1 text-[10px] opacity-60">{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex items-center gap-3 border-t border-border p-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="h-10 flex-1 rounded-lg border border-border bg-muted/60 px-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:bg-background"
            />
            <button type="submit" className="h-10 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
