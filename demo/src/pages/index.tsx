import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";

import {
  IconJetpack,
  IconPresentation,
  IconBrandGithub,
  IconLineDotted,
  IconView360
} from "@tabler/icons";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

export default function Home() {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <Layout
      description="TypeDoc to mdx API document generator">
      <div className="container">
        <section className={styles.mainHero}>
          <div className={styles.packageName}>typedoc-to-mdx</div>
          <div className={styles.packageNameSub}>TypeDoc to mdx API generator, powered with Docusaurus</div>
          <div className={styles.badges}>
            <a href="https://www.npmjs.com/package/typedoc-to-mdx" target="_blank" rel="noopener noreferrer">
              <img alt="npm" src="https://img.shields.io/npm/v/typedoc-to-mdx?logo=npm"></img>
            </a>
            <a href="https://github.com/naver/typedoc-to-mdx/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
              <img alt="License" src="https://img.shields.io/github/license/naver/typedoc-to-mdx?label=%F0%9F%93%9C%20license" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
              <img alt="Typescript" src="https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript" />
            </a>
            <a href="https://github.com/naver/typedoc-to-mdx/" target="_blank" rel="noopener noreferrer">
              <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/naver/typedoc-to-mdx?style=social" />
            </a>
          </div>
        </section>
        <CodeBlock className={clsx(styles.max400, "language-shell")}>{"npm install -D typedoc-to-mdx"}</CodeBlock>
        <section className={styles.buttons}>
          <Link to="/docs/installation" className={clsx(styles.button, "button button--outline button--secondary")}>
            <IconJetpack className={styles.btnIcon} /> Quick Start
          </Link>
          <Link to="/docs/api/Class/DummyClass" className={clsx(styles.button, "button button--outline button--secondary")}>
            <IconPresentation className={styles.btnIcon} /> Demo
          </Link>
          <Link to="https://github.com/naver/typedoc-to-mdx" className={clsx(styles.button, "button button--outline button--secondary")}>
            <IconBrandGithub className={styles.btnIcon} /> Github
          </Link>
        </section>
        <IconLineDotted className={styles.hr} />
        <div className={styles.showcaseHeader}>Showcases</div>
        <section className={styles.showcases}>
          <div className={clsx(styles.showcase, "clsx")}>
            <div className="card__header">
              <IconView360 /> View360
            </div>
            <div className="card__image">
              <img src={withBaseUrl("/thumb/view360.png")} alt="View360" />
            </div>
            <div className="card__footer">
              <a className="button button--primary button--block" href="https://naver.github.io/egjs-view360/docs/api/Class/View360" target="_blank">Visit</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
