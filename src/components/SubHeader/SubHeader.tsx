import styles from './SubHeader.module.css';

interface SubHeaderProps {
  currentDay: number;
  totalDays: number;
  challengeTitle: string;
}

export default function SubHeader({ currentDay, totalDays, challengeTitle }: SubHeaderProps) {
  return (
    <div className={styles.subHeader}>
      <div className={styles.left}>
        <button className={styles.backBtn} aria-label="Go back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Back</span>
        </button>
        <span className={styles.dayLabel}>
          Day {currentDay} of {totalDays}
        </span>
      </div>
      <div className={styles.right}>
        <span className={styles.challengeTitle}>{challengeTitle}</span>
        <button className={styles.infoBtn} aria-label="Challenge info">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
