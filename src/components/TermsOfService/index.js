import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import * as styles from './styles.js';
import { TermsContainer } from './styles.js';

const TermsOfService = () => {
  return (
    <>
      <Nav active="terms"></Nav>
      <TermsContainer>
        <div css={styles.headerClass}>
          <div css={styles.titleClass}>Terms of <br />Service</div>
          <div css={styles.descriptionClass}>Our working agreement. Clear terms for a successful partnership.</div>
        </div>
        
        <div css={styles.contentContainerClass}>
          <div css={styles.sectionClass}>
            <div css={styles.effectiveDateClass}>
              <strong>Effective Date:</strong> August 16, 2025
            </div>
            
            <p>
              Welcome to Zerocool Media. These Terms of Service ("Terms") explain how we work with our clients and how you may use our website and services. By using our site, hiring us, or engaging with our content, you agree to these Terms. Please read them carefully.
            </p>
            
            <hr />
            
            <h2>1. Who We Are</h2>
            <p>
              Zerocool Media is the trade name of <strong>Zero Cool LLC d/b/a Zerocool Media</strong> ("Zerocool," "we," "us," "our"). We provide video production, podcasting, branded content, and advertising campaign management services to businesses, including law firms, financial institutions, and government agencies.
            </p>
            
            <hr />
            
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing our website or using our services, you agree to these Terms. If you don't agree, you should not use our services. We may update these Terms from time to time, and the latest version will always be available on our website.
            </p>
            
            <hr />
            
            <h2>3. Use of Our Services</h2>
            <ul>
              <li>You may use our services only for lawful purposes and in compliance with industry regulations (e.g., attorney advertising rules, SEC/FINRA rules, government communication guidelines).</li>
              <li>You are responsible for reviewing and approving all content before it is published or distributed.</li>
              <li>You agree not to misuse our services (for example, by attempting to hack, disrupt, or interfere with our website, campaigns, or technology).</li>
            </ul>
            
            <hr />
            
            <h2>4. Client Responsibilities</h2>
            <ul>
              <li><strong>Compliance:</strong> We are not a law firm, financial advisor, or compliance consultant. Clients are solely responsible for ensuring that advertising and marketing materials comply with their professional and regulatory obligations, including but not limited to the <strong>California Rules of Professional Conduct for attorneys</strong> and other state or federal advertising rules.</li>
              <li><strong>Content Approval:</strong> Clients must review and approve all materials before launch or distribution.</li>
              <li><strong>Payments:</strong> Clients are responsible for paying invoices on time and covering both our service fees and any third-party ad spend (e.g., payments to Google, Meta, LinkedIn).</li>
            </ul>
            
            <hr />
            
            <h2>5. Automatic Renewals (California Disclosure)</h2>
            <p>If you purchase a subscription or retainer that renews automatically, we will:</p>
            <ul>
              <li>Clearly disclose the renewal terms before you agree.</li>
              <li>Send you confirmation of the subscription by email.</li>
              <li>Provide instructions on how to cancel.</li>
            </ul>
            <p>You may cancel automatic renewals at any time by contacting us at <strong>info@zerocool</strong>.</p>
            
            <hr />
            
            <h2>6. Intellectual Property</h2>
            <ul>
              <li><strong>Deliverables:</strong> Unless otherwise agreed in writing, clients own the final deliverables (videos, podcasts, ads) once all fees are paid in full.</li>
              <li><strong>Raw Materials:</strong> All raw project files (unedited footage, design files, templates) remain the property of Zerocool unless otherwise agreed.</li>
              <li><strong>Our Portfolio:</strong> We may display completed work in our portfolio, marketing materials, and case studies, unless a client requests otherwise in writing.</li>
            </ul>
            
            <hr />
            
            <h2>7. No Guarantees</h2>
            <ul>
              <li>We do not guarantee specific results such as leads, cases, revenue, or ad performance.</li>
              <li>Ad platform approvals and policies (Google, Meta, LinkedIn, etc.) are outside of our control. We are not responsible if an ad is disapproved, restricted, or underperforms.</li>
            </ul>
            
            <hr />
            
            <h2>8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>Zerocool is not liable for indirect, incidental, or consequential damages arising from your use of our services.</li>
              <li>Our total liability for any claim is limited to the amount paid by the client to us for the specific project or month of service that gave rise to the claim.</li>
              <li>Nothing in these Terms limits liability for fraud, intentional misconduct, or any other liability that cannot be limited under California law.</li>
            </ul>
            
            <hr />
            
            <h2>9. Termination</h2>
            <p>
              Either party may end the working relationship with written notice (typically 30 days unless otherwise agreed in writing). Any outstanding fees for completed work, retainers, or ad spend are still due.
            </p>
            
            <hr />
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
            </p>
            
            <hr />
            
            <h2>11. Contact Us</h2>
            <p>If you have questions about these Terms, contact us:</p>
            <p>
              <strong>Zero Cool LLC d/b/a Zerocool Media</strong><br />
              Email: <strong>info@zerocool</strong>
            </p>
          </div>
        </div>
      </TermsContainer>
      <Footer darkMode={true} />
    </>
  );
};

export default TermsOfService;
