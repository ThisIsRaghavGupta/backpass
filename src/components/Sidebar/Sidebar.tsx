import type { DayItem } from '../../types';
import styles from './Sidebar.module.css';

interface SidebarProps {
  days: DayItem[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
}

export default function Sidebar({ days, selectedDay, onSelectDay }: SidebarProps) {
  return (
    <nav className={styles.sidebar} aria-label="Challenge days">
      {/* Blurred decorative background */}
      <div className={styles.bgOverlay} aria-hidden="true" />

      <ul className={styles.dayList}>
        {days.map((item) => {
          const isSelected = item.day === selectedDay;
          const isLocked = item.status === 'locked';
          const isCompleted = item.status === 'completed';

          return (
            <li key={item.day}>
              <button
                className={`${styles.dayItem} ${isSelected ? styles.active : ''} ${isLocked ? styles.locked : ''}`}
                onClick={() => onSelectDay(item.day)}
                aria-current={isSelected ? 'step' : undefined}
                aria-label={`Day ${item.day}${isLocked ? ' (locked)' : ''}${isCompleted ? ' (completed)' : ''}`}
              >
                <span className={styles.dayText}>
                  <span className={styles.dayFullLabel}>Day - {item.day}</span>
                  <span className={styles.dayShortLabel}>{item.day}</span>
                </span>
                <span className={styles.statusIcon}>
                  {isCompleted && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="var(--accent-green)" />
                      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {isLocked && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.lockIcon}>
                      <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
