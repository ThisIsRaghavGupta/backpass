import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  header: ReactNode;
  subHeader: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

export default function PageLayout({ header, subHeader, sidebar, children }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>{header}</header>
      <div className={styles.subHeader}>{subHeader}</div>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <main className={styles.main}>
        <div className={styles.mainInner}>{children}</div>
      </main>
    </div>
  );
}
