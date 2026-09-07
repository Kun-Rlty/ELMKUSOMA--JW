import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms of Service — ELMKUSOMA",
  description: "Terms of Service for the ELMKUSOMA platform.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-base font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using ELMKUSOMA, you agree to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our platform. These terms apply to all users, including students, instructors,
                and visitors.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">2. Account Registration</h2>
              <p className="mt-3">
                You must provide accurate and complete information when creating an account. You are responsible for
                maintaining the confidentiality of your password and for all activities that occur under your account.
                You must be at least 5 years old to create an account.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">3. Use of the Platform</h2>
              <p className="mt-3">
                ELMKUSOMA grants you a limited, non-exclusive, non-transferable license to access and use the platform for
                personal educational purposes. You may not reproduce, distribute, modify, or create derivative works from any
                content on the platform without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">4. Content and Intellectual Property</h2>
              <p className="mt-3">
                All courses, live classes, recorded lessons, and digital library materials are owned by ELMKUSOMA or its
                content providers. Instructors retain ownership of their original course content but grant ELMKUSOMA a license
                to host and distribute it. You may not download, record, or redistribute paid content without authorization.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">5. Payments and Subscriptions</h2>
              <p className="mt-3">
                Some features require a paid subscription. Prices are listed in Tanzanian Shillings (TZS) and may change with
                notice. Refund requests are handled on a case-by-case basis within 14 days of purchase. Free tier content
                remains accessible without payment.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">6. Certificates</h2>
              <p className="mt-3">
                Certificates are issued upon successful completion of courses or programs. Certificates are digital and can be
                verified through our verification page. ELMKUSOMA reserves the right to revoke certificates obtained through
                dishonest means.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">7. Prohibited Conduct</h2>
              <p className="mt-3">
                You agree not to: use the platform for any unlawful purpose; attempt to gain unauthorized access to any part
                of the platform; transmit harmful code or malware; harass, abuse, or harm other users; or impersonate any
                person or entity.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">8. Limitation of Liability</h2>
              <p className="mt-3">
                ELMKUSOMA is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect,
                incidental, or consequential damages arising from your use of the platform. Our total liability shall not
                exceed the amount you paid us in the past 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">9. Termination</h2>
              <p className="mt-3">
                We may suspend or terminate your account at any time for violation of these terms. You may also delete your
                account at any time through your account settings. Upon termination, your right to use the platform ceases
                immediately.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">10. Governing Law</h2>
              <p className="mt-3">
                These terms are governed by the laws of the United Republic of Tanzania. Any disputes shall be resolved in the
                courts of Dar es Salaam, Tanzania.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">11. Contact</h2>
              <p className="mt-3">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:info@elmkusoma.co.tz" className="text-primary hover:underline">
                  info@elmkusoma.co.tz
                </a>{" "}
                or call +255 700 000 000.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
