import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "components/Footer";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
      <Helmet>
        <title>Privacy Policy - Play Greenly | Data Protection & Privacy</title>
        <meta name="description" content="Read Play Greenly's privacy policy to understand how we collect, use, and protect your personal data. Your privacy is important to us." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-brand-gray to-brand-white text-brand-black">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div
            className="text-2xl font-title font-bold text-brand-black"
            aria-label="Play Greenly Logo"
          >
            <Link to="/">Play Greenly</Link>
          </div>
          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-brand-black hover:text-brand-teal transition-colors font-body font-medium">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-brand-black hover:text-brand-teal transition-colors font-body font-medium">About</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-brand-black hover:text-brand-teal transition-colors font-body font-medium">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-brand-black hover:text-brand-teal transition-colors font-body font-medium">Blog</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 pb-16 sm:pb-20 lg:pb-24">
          <div className="bg-gradient-to-br from-brand-green/10 via-transparent to-transparent rounded-3xl pt-16 sm:pt-20 lg:pt-24 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-display font-bold text-brand-black tracking-tight font-title">
                  Privacy Policy
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-brand-black/80 max-w-3xl mx-auto font-body">
                  Your privacy is important to us. Here's how we collect, use, and
                  protect your data.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200/80 rounded-2xl shadow-lg p-8 sm:p-12">
              <div className="prose prose-lg max-w-none text-gray-700 prose-h2:font-title prose-h2:text-brand-green prose-h2:mb-2 prose-a:text-brand-teal hover:prose-a:text-brand-green prose-strong:text-brand-black [--tw-prose-bullets:theme(colors.brand.green)]">
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Last Updated:</strong> September 3, 2025
                </p>
                <p>
                  At PlayGreenly (accessible at www.playgreenly.com), we prioritize your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data. It applies to our website, services, and interactions through www.playgreenly.com. For any questions, please contact us via our{" "}
                  <Link to="/contact-us" className="text-brand-green hover:underline">
                    Contact Page
                  </Link>
                  .
                </p>

                <h2>1. Scope of This Policy</h2>
                <p>
                  This Privacy Policy covers information collected through our website and online services. It does not apply to offline activities or information collected through other channels.
                </p>
                <p>
                  <strong>Your Consent:</strong> By using our website or services, you agree to this Privacy Policy.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                  We collect information to provide, improve, and personalize our services. This includes:
                </p>
                <ul>
                  <li>
                    <strong>Information You Provide Directly:</strong>
                    <ul>
                      <li>
                        Name, email address, phone number, mailing address, or payment details when you create an account, make a purchase, subscribe to our newsletter, or contact us.
                      </li>
                      <li>
                        Any other information you voluntarily share (e.g., feedback or survey responses).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information Collected Automatically:</strong>
                    <ul>
                      <li>
                        Device and browsing data, such as IP address, browser type, operating system, pages visited, time spent on our site, and referring URLs.
                      </li>
                      <li>
                        We use cookies, web beacons, and similar technologies to collect this data (see "Cookies" section below).
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Information from Third Parties:</strong>
                    <ul>
                      <li>
                        Data from social media platforms (e.g., if you log in via Google or Facebook).
                      </li>
                      <li>
                        Analytics data from partners like Google Analytics to understand site usage.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Operate and maintain our website and services.</li>
                  <li>Process purchases and deliver products or services.</li>
                  <li>Personalize your experience (e.g., tailoring content or recommendations).</li>
                  <li>Analyze site usage to improve functionality and user experience.</li>
                  <li>Communicate with you, including customer support, updates, and promotional emails (you can opt out).</li>
                  <li>Prevent fraud, ensure security, and comply with legal obligations.</li>
                </ul>

                <h2>4. Sharing Your Information</h2>
                <p>
                  We do not sell your personal information. We may share it in these cases:
                </p>
                <ul>
                  <li>
                    <strong>With Your Consent:</strong> If you explicitly agree to share your data (e.g., for a partner promotion).
                  </li>
                  <li>
                    <strong>Service Providers:</strong> With trusted vendors (e.g., payment processors, hosting providers) who are contractually obligated to protect your data and use it only for authorized purposes.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> To comply with laws, court orders, or subpoenas, or to protect our rights, property, or safety.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> If PlayGreenly is involved in a merger, acquisition, or sale, your data may be transferred but will remain subject to this policy.
                  </li>
                </ul>

                <h2>5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and web beacons to enhance your experience, store preferences, and analyze site performance. Examples include:
                </p>
                <ul>
                  <li>Saving your cart items for easier checkout.</li>
                  <li>Tracking page visits to improve content.</li>
                </ul>
                <p>
                  Third-party advertisers (e.g., ad networks) may also use cookies or JavaScript to deliver personalized ads. We do not control these third-party cookies.
                </p>
                <p><strong>Your Choices:</strong></p>
                <ul>
                  <li>Disable cookies via your browser settings (check your browser's help section for instructions).</li>
                  <li>Opt out of targeted ads through tools like the Network Advertising Initiative.</li>
                </ul>

                <h2>6. Your Privacy Rights</h2>
                <p>You have rights over your personal data, including:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
                  <li><strong>Correction:</strong> Ask us to fix inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> Request removal of your data (subject to legal obligations).</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails via the "unsubscribe" link or contact us.</li>
                  <li><strong>Restrict Processing:</strong> Limit how we use your data in certain cases.</li>
                  <li><strong>Data Portability:</strong> Request your data be transferred to another service.</li>
                  <li><strong>Object to Processing:</strong> Challenge our use of your data for specific purposes (e.g., marketing).</li>
                </ul>
                <p>
                  To exercise these rights, contact us via our{" "}
                  <Link to="/contact-us" className="text-brand-green hover:underline">
                    Contact Page
                  </Link>
                  . We'll respond within 30 days, as required by law.
                </p>
                <p>
                  <strong>California Residents (CCPA):</strong> Under the California Consumer Privacy Act, you can:
                </p>
                <ul>
                  <li>Request details about the categories and specific pieces of personal data we collect.</li>
                  <li>Request deletion of your data.</li>
                  <li>Opt out of any sale of your data (note: we do not sell data).</li>
                </ul>
                <p>
                  <strong>GDPR (EU Residents):</strong> If you're in the European Economic Area, you have the rights listed above, and we comply with GDPR requirements.
                </p>

                <h2>7. Data Retention</h2>
                <p>We keep your personal information only as long as needed to:</p>
                <ul>
                  <li>Fulfill the purposes outlined in this policy (e.g., process your order).</li>
                  <li>Meet legal, accounting, or reporting requirements.</li>
                </ul>
                <p>
                  After this period, we securely delete or anonymize your data so it cannot be linked to you.
                </p>

                <h2>8. Children's Privacy</h2>
                <p>
                  Our website and services are not intended for children under 13. We do not knowingly collect data from children under 13. If we learn a child has provided personal information, we will promptly delete it. Parents or guardians can contact us to address any concerns.
                </p>

                <h2>9. Security</h2>
                <p>
                  We use industry-standard measures (e.g., encryption, secure servers) to protect your data from unauthorized access, loss, or misuse. However, no online system is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2>10. Third-Party Links</h2>
                <p>
                  Our website may link to external sites (e.g., social media or partner stores). We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
                </p>

                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy to reflect changes in our practices or legal requirements. We'll post updates on this page with the new "Last Updated" date. Please review it periodically.
                </p>

                <h2>12. Additional Information for US Users</h2>
                <p>
                  We comply with all applicable US federal and state privacy laws, including the CCPA. If your state has specific privacy requirements (e.g., Virginia's CDPA or Colorado's CPA), we'll honor those. Contact us for details.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                  For questions, concerns, or to exercise your rights, reach us via:
                </p>
                <ul>
                  <li>
                    <strong>Website:</strong>{" "}
                    <Link to="/contact-us" className="text-brand-green hover:underline">
                      Contact Page
                    </Link>
                  </li>
                  <li><strong>Email:</strong> info@playgreenly.com</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
