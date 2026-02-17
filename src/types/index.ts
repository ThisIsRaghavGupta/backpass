export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Reaction {
  emoji: string;
  count: number;
}

export interface Post {
  id: string;
  author: User;
  timestamp: string;
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  reactions: Reaction[];
  commentCount: number;
}

export interface DayItem {
  day: number;
  status: 'completed' | 'locked';
}

export interface ChallengeInfo {
  title: string;
  totalDays: number;
  participantCount: number;
  steps: { number: number; text: string }[];
}
