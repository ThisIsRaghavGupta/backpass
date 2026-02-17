import type { Reaction } from '../../types';
import styles from './ReactionBar.module.css';

interface ReactionBarProps {
  reactions: Reaction[];
  commentCount: number;
}

export default function ReactionBar({ reactions, commentCount }: ReactionBarProps) {
  const totalReactions = reactions.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <button className={styles.reactionGroup} aria-label="Reactions">
          <span className={styles.emojis}>
            {reactions.map((r, i) => (
              <span key={i} className={styles.emoji}>
                {r.emoji}
              </span>
            ))}
          </span>
          {totalReactions > 0 && <span className={styles.count}>{totalReactions}</span>}
        </button>

        <button className={styles.actionBtn} aria-label="Add reaction">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </button>

        <button className={styles.actionBtn} aria-label="Comment">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {commentCount > 0 && (
        <button className={styles.commentCount}>
          {commentCount} Comments
        </button>
      )}
    </div>
  );
}
