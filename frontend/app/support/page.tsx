"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    q: "How do I reset my password?",
    a: "Go to the Login page and click 'Forgot Password'. Enter your email address and we will send you a link to reset your password.",
  },
  {
    q: "How do I verify a certificate?",
    a: "Visit the Certificate Verification page and enter the certificate ID. You can find the ID on your certificate document.",
  },
  {
    q: "Can I access courses for free?",
    a: "Yes! ELMKUSOMA offers a free tier with access to select courses, recorded classes, and the digital library. Premium content requires a subscription.",
  },
  {
    q: "How do I contact my instructor?",
    a: "You can reach instructors through the live class chat during sessions or through the course discussion board.",
  },
  {
    q: "How do I enroll in a school program?",
    a: "Browse the Schools section, select your education level, choose an institution, and click 'Apply for Admission' to start the enrollment process.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, and credit/debit cards.",
  },
]

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Support Center</h1>
          <p className="mt-2 text-muted-foreground">
            We&apos;re here to help. Reach out to us or browse our frequently asked questions.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Contact Options */}
            <div>
              <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
              <div className="mt-4 space-y-4">
                <a
                  href="mailto:info@elmkusoma.co.tz"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@elmkusoma.co.tz</p>
                  </div>
                </a>

                <a
                  href="tel:+255700000000"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Call Us</p>
                    <p className="text-sm text-muted-foreground">+255 700 000 000</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/255700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
                {submitted ? (
                  <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle className="size-5 shrink-0" />
                    Message sent! We will get back to you within 24 hours.
                  </div>
                ) : (
                  <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="mt-1.5 h-11 w-full rounded-lg border border-border bg-muted/60 px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="mt-1.5 h-11 w-full rounded-lg border border-border bg-muted/60 px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="mt-1.5 h-11 w-full rounded-lg border border-border bg-muted/60 px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Describe your issue or question..."
                        className="mt-1.5 w-full rounded-lg border border-border bg-muted/60 px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-background"
                      />
                    </div>
                    <Button type="submit" className="h-11 w-full text-sm">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-lg font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-card shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm font-medium text-foreground"
                    >
                      {faq.q}
                      <span className="ml-2 shrink-0 text-muted-foreground">
                        {openFaq === i ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
