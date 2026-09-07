import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy — ELMKUSOMA",
  description: "Privacy Policy for the ELMKUSOMA platform.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-base font-semibold text-foreground">1. Information We Collect</h2>
              <p className="mt-3">
                When you create an account on ELMKUSOMA, we collect your name, email address, education level, and password.
                We also collect usage data such as courses accessed, live classes attended, and learning progress to improve
                your experience.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">2. How We Use Your Information</h2>
              <p className="mt-3">
                We use your information to provide and improve our educational services, track your learning progress, issue
                certificates, communicate important updates, and ensure the security of your account. We do not sell your
                personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">3. Data Sharing</h2>
              <p className="mt-3">
                We may share your information with partner institutions when you apply for admission or enroll in their programs.
                We may also share aggregated, anonymized data for research and improvement purposes. Your personal information
                is never shared without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">4. Data Security</h2>
              <p className="mt-3">
                We implement industry-standard security measures to protect your personal information, including encrypted
                password storage, secure data transmission, and regular security audits. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">5. Cookies</h2>
              <p className="mt-3">
                ELMKUSOMA uses cookies and similar technologies to maintain your session, remember your preferences, and
                analyze usage patterns. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">6. Your Rights</h2>
              <p className="mt-3">
                You have the right to access, update, or delete your personal information at any time through your account
                settings. You may also request a copy of all data we hold about you by contacting our support team.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">7. Children&apos;s Privacy</h2>
              <p className="mt-3">
                ELMKUSOMA serves learners of all ages including children. For users under 13, we require parental or guardian
                consent before account creation. We collect minimal data from young learners and provide additional protections.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">8. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting
                the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">9. Contact Us</h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
