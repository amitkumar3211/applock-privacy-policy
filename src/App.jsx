import React from 'react';

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const sectionIcons = {
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

const Section = ({ icon, title, children, className = '' }) => (
  <div className={`section ${className}`}>
    <h2>
      <span className="icon">{sectionIcons[icon]}</span>
      {title}
    </h2>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-icon">
          <ShieldIcon />
        </div>
        <h1>Privacy Policy</h1>
        <p className="app-name">AppLock</p>
        <div className="last-updated">
          <CalendarIcon />
          <span>Last updated: June 28, 2026</span>
        </div>
      </header>

      <Section icon="info" title="Introduction">
        <p>
          Welcome to AppLock. We are committed to protecting your privacy and
          ensuring you have a positive experience using our application. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you use AppLock.
        </p>
      </Section>

      <Section icon="database" title="Information We Collect">
        <p>
          AppLock is designed with privacy at its core. We collect minimal data
          and all sensitive information stays on your device:
        </p>
        <ul>
          <li>
            PIN, pattern, and biometric data are stored locally on your device
            and are never transmitted to any server.
          </li>
          <li>
            Intruder selfie photos are captured and stored locally on your
            device only when enabled by you.
          </li>
          <li>
            App usage data such as which apps you choose to lock is stored
            locally and is not shared with any third party.
          </li>
          <li>
            Vault files (photos and videos) are encrypted and stored locally on
            your device.
          </li>
        </ul>
      </Section>

      <Section icon="key" title="Permissions We Require">
        <p>AppLock requires certain permissions to function properly:</p>
        <ul>
          <li>
            <strong>Accessibility Service:</strong> Required to detect when
            locked apps are opened and display the lock screen. This data is
            processed in real-time and is not stored or transmitted.
          </li>
          <li>
            <strong>Display Over Other Apps:</strong> Required to show the lock
            screen overlay when a locked app is accessed.
          </li>
          <li>
            <strong>Camera:</strong> Used only for the intruder selfie feature
            when enabled. Photos are stored locally on your device.
          </li>
          <li>
            <strong>Biometric Sensors:</strong> Used for fingerprint or face
            unlock when enabled by you. Biometric data is handled by your
            device's secure hardware and is never accessed by AppLock directly.
          </li>
        </ul>
      </Section>

      <Section icon="lock" title="Data Storage & Security">
        <p>
          All your data is stored locally on your device. AppLock does not
          operate any cloud servers or remote databases. Your PIN and pattern are
          stored using secure encryption methods provided by the Android
          operating system.
        </p>
        <p>
          Vault files are encrypted using industry-standard encryption before
          being stored on your device. Only you can access them through the
          AppLock app with your correct PIN, pattern, or biometric
          authentication.
        </p>
      </Section>

      <Section icon="share" title="Data Sharing">
        <p>
          We do not sell, trade, or share your personal information with any
          third parties. Since all data is stored locally on your device, there
          is no data transfer to external servers.
        </p>
      </Section>

      <Section icon="eye" title="Third-Party Services">
        <p>
          AppLock does not integrate with any third-party analytics, advertising,
          or tracking services. Your usage of the app is completely private.
        </p>
      </Section>

      <Section icon="users" title="Children's Privacy">
        <p>
          AppLock does not knowingly collect personal information from children
          under the age of 13. The app is designed as a security tool and does
          not target children as its primary audience.
        </p>
      </Section>

      <Section icon="refresh" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be reflected within the app and on this page. We encourage you to
          review this policy periodically to stay informed about how we are
          protecting your information.
        </p>
      </Section>

      <Section icon="mail" title="Contact Us" className="contact-card">
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at:
        </p>
        <a href="mailto:support@applock.com" className="contact-email">
          support@applock.com
        </a>
      </Section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} AppLock. All rights reserved.
      </footer>
    </div>
  );
}
