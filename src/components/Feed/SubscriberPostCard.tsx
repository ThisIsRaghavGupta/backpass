import type { Post } from '../../types';
import ConfettiHeader from './ConfettiHeader';
import FeedPostCard from './FeedPostCard';
import styles from './SubscriberPostCard.module.css';

interface SubscriberPostCardProps {
  post: Post;
}

export default function SubscriberPostCard({ post }: SubscriberPostCardProps) {
  return (
    <div className={styles.wrapper}>
      <ConfettiHeader />
      <div className={styles.postContent}>
        <FeedPostCard post={post} flat />
      </div>
    </div>
  );
}
