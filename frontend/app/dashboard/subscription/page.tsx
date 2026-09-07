"use client"

import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: ["Access to free courses", "Basic live classes", "Digital library (limited)", "Community support"],
    current: true,
  },
  {
    name: "Premium",
    price: "25,000",
    period: "/month",
    features: ["All free features", "Unlimited live classes", "Full digital library", "Downloadable materials", "Priority support", "Certificates"],
    current: false,
    highlighted: true,
  },
  {
    name: "Institution",
    price: "Custom",
    period: "",
    features: ["All premium features", "Bulk enrollment", "Admin dashboard", "Custom branding", "Dedicated support", "API access"],
    current: false,
  },
]

export default function DashboardSubscriptionPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Subscription</h1>
        <p className="mt-1 text-sm text-muted-foreground">Choose the plan that fits your learning needs.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border bg-card p-6 shadow-xs ${plan.highlighted ? "border-primary border-2" : "border-border"}`}
          >
            {plan.highlighted && (
              <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                RECOMMENDED
              </span>
            )}
            <h3 className="mt-3 text-lg font-bold text-foreground">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-foreground">{plan.price === "Custom" ? "" : "TZS"} {plan.price}</span>
              {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
            </div>
            <ul className="mt-5 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-teal" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 h-10 w-full rounded-lg text-sm font-medium transition-colors ${
                plan.current
                  ? "border border-border bg-muted text-muted-foreground"
                  : plan.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-border bg-card text-foreground hover:bg-muted"
              }`}
              disabled={plan.current}
            >
              {plan.current ? "Current Plan" : "Upgrade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
