import type { Post, DayItem, ChallengeInfo, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Ashraf Idrishi',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
};

export const days: DayItem[] = [
  { day: 1, status: 'completed' },
  { day: 2, status: 'locked' },
  { day: 3, status: 'locked' },
  { day: 4, status: 'locked' },
  { day: 5, status: 'locked' },
  { day: 6, status: 'locked' },
  { day: 7, status: 'locked' },
  { day: 8, status: 'locked' },
  { day: 9, status: 'locked' },
];

export const userSubmission: Post = {
  id: 'p1',
  author: currentUser,
  timestamp: '1s',
  content: 'Today\'s challenge workout completed—feeling stronger already',
  media: {
    type: 'video',
    url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
  },
  reactions: [
    { emoji: '🙏', count: 18 },
    { emoji: '😍', count: 0 },
  ],
  commentCount: 10,
};

export const pinnedPost: Post = {
  id: 'p2',
  author: {
    id: 'u2',
    name: 'Russell Brunson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  timestamp: '3 hrs ago',
  content:
    'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
  reactions: [],
  commentCount: 0,
};

export const challengeInfo: ChallengeInfo = {
  title: '9-Day Fitness Challenge',
  totalDays: 9,
  participantCount: 85,
  steps: [
    { number: 1, text: 'Minimum 20 minutes of sit-up' },
    { number: 2, text: 'Mention Intensity' },
    { number: 3, text: 'Upload Media (Optional)' },
  ],
};

export const communityAvatars: string[] = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
];
