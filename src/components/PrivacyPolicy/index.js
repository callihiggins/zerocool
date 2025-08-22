import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import * as styles from './styles.js';
import { PrivacyContainer } from './styles.js';

const PrivacyPolicy = () => {
  return (
    <>
      <Nav active="privacy"></Nav>
      <PrivacyContainer>
        <div css={styles.headerClass}>
          <div css={styles.titleClass}>Privacy <br />Policy</div>
          <div css={styles.descriptionClass}>Your privacy matters. Here's how we protect and use your information.</div>
        </div>
        
        <div css={styles.contentContainerClass}>
          <div css={styles.sectionClass}>
            <div css={styles.effectiveDateClass}>
              <strong>Effective Date:</strong> August 15, 2025
            </div>
            
            <p>
              This Privacy Policy explains how <strong>Zero Cool LLC d/b/a Zerocool Media</strong> ("Zerocool," "we," "us," "our") collects, uses, and protects information when you visit our website, work with us as a client, or interact with content we produce and distribute.
            </p>
            <p>
              We create and distribute video, podcast, branded content, and advertising campaigns for businesses, including law firms, financial institutions, and government agencies. Because many of our clients work in regulated industries, we take privacy and compliance seriously.
            </p>
            
            <hr />
            
            <h2>1. Information We Collect</h2>
            <p>We collect information in three main ways:</p>
            <ul>
              <li><strong>From you directly</strong> – when you fill out forms, sign up for updates, communicate with us, or hire us for services.<br /> <em>Examples: name, email, phone number, billing details.</em></li>
              <li><strong>From your use of our website and services</strong> – through cookies, analytics, and ad tracking technologies.<br /> <em>Examples: pages visited, device/browser info, IP address.</em></li>
              <li><strong>From our clients</strong> – if a client provides us with data (like email lists, creative assets, or campaign targeting information) to run advertising or content campaigns.</li>
            </ul>
            
            <hr />
            
            <h2>2. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide video production, podcast, and advertising services.</li>
              <li>Manage and run advertising campaigns on platforms like Google, Meta (Facebook/Instagram), LinkedIn, and others.</li>
              <li>Process payments and send invoices.</li>
              <li>Communicate with you about projects, updates, and support.</li>
              <li>Improve our website, services, and campaigns.</li>
            </ul>
            <p>We do <strong>not</strong> sell personal information.</p>
            
            <hr />
            
            <h2>3. Client-Provided Data</h2>
            <p>Some clients (such as law firms or financial institutions) may provide us with contact lists, creative materials, or other sensitive data.</p>
            <ul>
              <li>We only use client-provided data to deliver the agreed-upon services.</li>
              <li>We do not use client-provided data for our own marketing or share it with others, except with trusted service providers (like ad platforms) as needed to run campaigns.</li>
              <li>Clients are responsible for ensuring that any data they provide to us complies with applicable privacy, advertising, and industry-specific rules.</li>
            </ul>
            
            <hr />
            
            <h2>4. Advertising & Analytics</h2>
            <p>We use cookies, pixels, and similar technologies to understand how people use our site and to deliver relevant ads.</p>
            <p>This may include:</p>
            <ul>
              <li>Google Analytics</li>
              <li>Facebook/Instagram Pixel</li>
              <li>LinkedIn Insights</li>
              <li>Other advertising and tracking tools</li>
            </ul>
            <p>You can manage cookies in your browser settings. To opt out of targeted ads, you can also use the <a href="https://optout.aboutads.info"> DAA's opt-out tool</a>.</p>
            
            <hr />
            
            <h2>5. Regulated Industries (Law, Finance, Government)</h2>
            <p>We work with clients in regulated industries. To be clear:</p>
            <ul>
              <li>We provide creative and technical execution, but we do <strong>not</strong> provide legal, financial, or regulatory compliance advice.</li>
              <li>Clients are solely responsible for ensuring that their advertising and marketing materials comply with industry rules (e.g., attorney advertising rules, SEC/FINRA regulations, government communication guidelines).</li>
            </ul>
            
            <hr />
            
            <h2>6. Data Sharing</h2>
            <p>We may share information with trusted third-party service providers who help us run our business, such as:</p>
            <ul>
              <li>Website hosting providers</li>
              <li>Payment processors</li>
              <li>Analytics and ad platforms</li>
              <li>Cloud storage and project management tools</li>
            </ul>
            <p>These vendors are required to keep your information secure and use it only for the services they provide to us.</p>
            
            <hr />
            
            <h2>7. Data Retention</h2>
            <ul>
              <li>We keep client business records and project files for as long as needed to deliver services and meet legal obligations.</li>
              <li>Ad campaign data (like targeting lists or analytics) is generally retained for up to <strong>24 months</strong> unless a client requests earlier deletion.</li>
            </ul>
            
            <hr />
            
            <h2>8. Your Privacy Rights</h2>
            <p>Depending on where you live, you may have certain privacy rights.</p>
            
            <h3><strong>California Residents (CCPA / CPRA)</strong></h3>
            <p>If you are a California resident, you have the right to:</p>
            <ul>
              <li>Know what categories of personal information we collect, use, and share.</li>
              <li>Request a copy of the personal information we hold about you.</li>
              <li>Request corrections or deletion of your personal information.</li>
              <li>Opt out of the "sharing" of personal information for targeted advertising.</li>
              <li>Limit the use of sensitive personal information (if applicable).</li>
            </ul>
            <p>We do not sell personal information. To exercise your rights, email us at <strong>info@zerocool</strong>.</p>
            <p>We also recognize <strong>Global Privacy Control (GPC)</strong> browser signals to the extent required by California law.</p>
            
            <h3><strong>Other U.S. Residents</strong></h3>
            <p>You may have rights under state laws similar to CCPA. Please contact us to exercise your rights.</p>
            
            <h3><strong>International Visitors (GDPR)</strong></h3>
            <p>If you are located outside the U.S., you consent to your data being transferred to and processed in the United States. You may request access, corrections, or deletion of your data at any time.</p>
            
            <hr />
            
            <h2>9. Security</h2>
            <p>We use industry-standard safeguards, including encryption and secure servers, to protect your information. Payments are processed by third-party gateways and are never stored on our servers.</p>
            
            <hr />
            
            <h2>10. Children's Privacy</h2>
            <p>Our services are not intended for children under 13, and we do not knowingly collect information from them.</p>
            
            <hr />
            
            <h2>11. Changes to This Policy</h2>
            <p>We may update this policy from time to time. If we make material changes, we'll post an updated version here with a new effective date.</p>
            
            <hr />
            
            <h2>12. Contact Us</h2>
            <p>If you have questions about this policy or your data, contact us:</p>
            <p>
              <strong>Zero Cool LLC d/b/a Zerocool Media</strong><br />
              Email: <strong>info@zerocool</strong>
            </p>
          </div>
        </div>
      </PrivacyContainer>
      <Footer darkMode={true} />
    </>
  );
};

export default PrivacyPolicy;
