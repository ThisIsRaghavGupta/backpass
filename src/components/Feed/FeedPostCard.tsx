import type { Post } from '../../types';
import ReactionBar from './ReactionBar';
import styles from './FeedPostCard.module.css';

interface FeedPostCardProps {
  post: Post;
  showReactions?: boolean;
  flat?: boolean;
}

export default function FeedPostCard({ post, showReactions = true, flat = false }: FeedPostCardProps) {
  return (
    <article className={`${styles.card} ${flat ? styles.flat : ''}`}>
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

      {/* Post Media */}
      {post.media && (
        <div className={styles.mediaWrapper}>
          <img
            className={styles.mediaImage}
            src={post.media.thumbnail || post.media.url}
            alt="Post media"
            loading="lazy"
          />
          {post.media.type === 'video' && (
            <button className={styles.playButton} aria-label="Play video">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.55)" />
                <path d="M19 15l14 9-14 9V15z" fill="white" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Reactions */}
      {showReactions && (
        <ReactionBar reactions={post.reactions} commentCount={post.commentCount} />
      )}
    </article>
  );
}
