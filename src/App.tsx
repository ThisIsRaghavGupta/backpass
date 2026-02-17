import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import PageLayout from './components/Layout/PageLayout';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Sidebar from './components/Sidebar/Sidebar';
import SubscriberPostCard from './components/Feed/SubscriberPostCard';
import CommunitySection from './components/Feed/CommunitySection';
import {
  currentUser,
  days,
  userSubmission,
  pinnedPost,
  challengeInfo,
  communityAvatars,
} from './data/mockData';

function AppContent() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <PageLayout
      header={
        <Header
          userAvatar={currentUser.avatar}
          streakCount={30}
        />
      }
      subHeader={
        <SubHeader
          currentDay={selectedDay}
          totalDays={challengeInfo.totalDays}
          challengeTitle={challengeInfo.title}
        />
      }
      sidebar={
        <Sidebar
          days={days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      }
    >
      <SubscriberPostCard post={userSubmission} />
      <CommunitySection
        pinnedPost={pinnedPost}
        challengeInfo={challengeInfo}
        avatars={communityAvatars}
        participantCount={challengeInfo.participantCount}
      />
    </PageLayout>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
