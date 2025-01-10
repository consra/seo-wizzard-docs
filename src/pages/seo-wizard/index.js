import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function SEOWizard() {
  return (
    <Layout
      title="SEO Wizard 404 Redirect App"
      description="SEO Wizard 404 Redirect App - Manage and optimize your website's redirects">
      <main className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>SEO Wizard 404 Redirect App</h1>
          <p className={styles.subtitle}>
            Optimize your website's redirects and improve user experience
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Automatic 404 Detection</h2>
            <p>
              Automatically detect and track 404 errors on your website in real-time
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Custom Redirect Rules</h2>
            <p>
              Create and manage custom redirect rules to improve user navigation
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Analytics & Reporting</h2>
            <p>
              Get detailed insights about your website's 404 errors and redirects
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <Link
            className="button button--primary button--lg"
            to="/seo-wizard/privacy-policy">
            View Privacy Policy
          </Link>
        </div>
      </main>
    </Layout>
  );
} 