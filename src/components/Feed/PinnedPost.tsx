import type { Post, ChallengeInfo } from '../../types';
import styles from './PinnedPost.module.css';

interface PinnedPostProps {
  post: Post;
  challengeInfo: ChallengeInfo;
}

const stepColors = ['#2196f3', '#4caf50', '#ff9800'];

export default function PinnedPost({ post, challengeInfo }: PinnedPostProps) {
  return (
    <div className={styles.pinnedPost}>
      {/* Pinned Label */}
      <div className={styles.pinnedLabel}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
        </svg>
        <span>This is a pinned post</span>
      </div>

      {/* Post Header */}
      <div className={styles.postHeader}>
        <div className={styles.authorInfo}>
          <img
            className={styles.avatar}
            src={post.author.avatar}
            alt={post.author.name}
            loading="lazy"
          />
          <div className={styles.authorMeta}>
            <span className={styles.authorName}>{post.author.name}</span>
            <span className={styles.timestamp}>{post.timestamp}</span>
          </div>
        </div>
        <button className={styles.moreBtn} aria-label="More options">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Post Content */}
      <p className={styles.content}>{post.content}</p>

      {/* Challenge Steps */}
      <div className={styles.steps}>
        {challengeInfo.steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <span
              className={styles.stepBadge}
              style={{ backgroundColor: stepColors[step.number - 1] || stepColors[0] }}
            >
              {step.number}
            </span>
            <span className={styles.stepText}>{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
