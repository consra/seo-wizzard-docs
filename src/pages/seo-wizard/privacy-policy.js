import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy - SEO Wizard"
      description="Privacy Policy for SEO Wizard 404 Redirect App">
      <main className={styles.container}>
        <div className={styles.privacyContent}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              Welcome to the Privacy Policy for SEO Wizard 404 Redirect App. This document
              outlines how we collect, use, and protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <ul>
              <li>Redirect patterns</li>
              <li>Wildcard redirects</li>
              <li>404 error logs</li>
              <li>Emails used in sending the notifications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Use the redirect information for resolving the 404 errors</li>
              <li>Provide analytics based on the 404 error logs</li>
              <li>Send notifications based on the 404 error logs</li>
            </ul>
          </section>

          <div className={styles.backLink}>
            <Link to="/seo-wizard">← Back to SEO Wizard</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
} 