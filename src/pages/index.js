import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/resources">
            View the docs!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem', marginBottom: '2rem'}} src='https://camo.githubusercontent.com/81a1ca0b47997bb238f03f90045396d431a0a4530e4b7bc460ade71cacd49919/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3930333234333535333134333134343434382f3930333730393636393735333737303030342f63617074696f6e2e676966' />
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
