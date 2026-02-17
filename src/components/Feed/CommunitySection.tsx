import type { Post, ChallengeInfo } from '../../types';
import PinnedPost from './PinnedPost';
import styles from './CommunitySection.module.css';

interface CommunitySectionProps {
  pinnedPost: Post;
  challengeInfo: ChallengeInfo;
  avatars: string[];
  participantCount: number;
}

export default function CommunitySection({
  pinnedPost,
  challengeInfo,
  avatars,
  participantCount,
}: CommunitySectionProps) {
  return (
    <div className={styles.section}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>
          See what others{' '}
          <span className={styles.avatarStack}>
            {avatars.map((avatar, i) => (
              <img
                key={i}
                className={styles.stackAvatar}
                src={avatar}
                alt=""
                style={{ zIndex: avatars.length - i }}
                loading="lazy"
              />
            ))}
          </span>{' '}
          shared
        </h2>
        <p className={styles.subtitle}>
          <strong>{participantCount}+</strong> participants already completed
        </p>
      </div>

      {/* Pinned Post */}
      <div className={styles.postContainer}>
        <PinnedPost post={pinnedPost} challengeInfo={challengeInfo} />
      </div>
    </div>
  );
}
