import React, { useState, useEffect, useCallback } from 'react';
import { UserProgress, AppNotification, TopicId } from './types';
import { 
  getUserProfile, addXpAndPoints, markTopicAsRead, 
  getNotifications, addNotification, markNotificationsAsRead, 
  saveUserProfile 
} from './utils/storage';
import { setupSecurityHandlers, soundEffects } from './utils/security';
import { Header } from './components/Header';
import { Navigation, NavTab } from './components/Navigation';
import { SecurityWatermark } from './components/SecurityWatermark';
import { PrivacyShield } from './components/PrivacyShield';
import { SecurityAlertToast } from './components/SecurityAlertToast';
import { NotesViewer } from './components/NotesViewer';
import { QuizSection } from './components/QuizSection';
import { ExamSection } from './components/ExamSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { SecuritySection } from './components/SecuritySection';
import { NotificationModal } from './components/NotificationModal';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, WifiOff } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<UserProgress>(getUserProfile());
  const [activeTab, setActiveTab] = useState<NavTab>('notes');
  const [targetQuizTopic, setTargetQuizTopic] = useState<TopicId>('affirmative-negative');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [privacyShieldActive, setPrivacyShieldActive] = useState<boolean>(false);
  const [securityToast, setSecurityToast] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<AppNotification[]>(getNotifications());
  const [isNotifModalOpen, setIsNotifModalOpen] = useState<boolean>(false);
  const [examOngoing, setExamOngoing] = useState<boolean>(false);

  // 1. Setup Online / Offline listeners
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      addNotification({
        title: '🌐 আপনি অনলাইনে আছেন',
        message: 'ইন্টারনেট সংযোগ চালু হয়েছে। আপনার ডেটা সিঙ্ক রয়েছে।',
        type: 'tip'
      });
      setNotifications(getNotifications());
    };

    const handleOffline = () => {
      setIsOnline(false);
      addNotification({
        title: '📶 অফলাইন মোড সক্রিয়',
        message: 'ইন্টারনেট সংযোগ নেই। সমস্ত ব্যাকরণ রুলস ও কুইজ অফলাইনেও নির্বিঘ্নে চলবে!',
        type: 'tip'
      });
      setNotifications(getNotifications());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 2. Setup Security & DRM Handlers
  useEffect(() => {
    const cleanup = setupSecurityHandlers(
      (warningMsg) => {
        setSecurityToast(warningMsg);
        // Log in notifications
        const updated = addNotification({
          title: '⚠️ সুরক্ষা সতর্কতা',
          message: warningMsg,
          type: 'security'
        });
        setNotifications(updated);
      },
      (shieldState) => {
        setPrivacyShieldActive(shieldState);
      }
    );

    return cleanup;
  }, []);

  // 3. Auto dismiss toast
  useEffect(() => {
    if (!securityToast) return;
    const timer = setTimeout(() => {
      setSecurityToast(null);
    }, 4500);
    return () => clearTimeout(timer);
  }, [securityToast]);

  // Sound toggle
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundEffects.enabled = nextState;
  };

  // Add XP from Quiz
  const handleAddXp = useCallback((points: number) => {
    const updated = addXpAndPoints(points);
    setUser(updated);
  }, []);

  // Complete Exam
  const handleExamComplete = (score: number, total: number, earnedXp: number) => {
    const updated = addXpAndPoints(earnedXp, true, score);
    setUser(updated);
    setExamOngoing(false);

    const updatedNotifs = addNotification({
      title: score >= 60 ? '🎉 মডেল টেস্টে সাফল্য!' : '📝 মডেল টেস্ট সম্পন্ন',
      message: `আপনি ${score}% স্কোর অর্জন করেছেন এবং +${earnedXp} XP লাভ করেছেন।`,
      type: 'exam'
    });
    setNotifications(updatedNotifs);
  };

  // Mark Topic as Read
  const handleMarkTopicRead = (topicId: TopicId) => {
    const updated = markTopicAsRead(topicId);
    setUser(updated);
    soundEffects.playSuccess();
    const updatedNotifs = addNotification({
      title: '📖 অধ্যায় সম্পন্ন!',
      message: `আপনি নতুন একটি গ্রামার অধ্যায় পড়া সম্পন্ন করেছেন (+২০ XP)।`,
      type: 'reward'
    });
    setNotifications(updatedNotifs);
  };

  // Start Quiz from Notes
  const handleStartQuizForTopic = (topicId: TopicId) => {
    setTargetQuizTopic(topicId);
    setActiveTab('quiz');
  };

  // Mark all notifications read
  const handleMarkAllNotificationsRead = () => {
    const updated = markNotificationsAsRead();
    setNotifications(updated);
  };

  // Add custom notification
  const handleAddCustomNotification = (
    title: string,
    message: string,
    type: 'security' | 'reward' | 'exam' | 'tip'
  ) => {
    const updated = addNotification({ title, message, type });
    setNotifications(updated);
  };

  const unreadNotifCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-transparent relative font-sans">
      {/* 1. Dynamic Watermark across the entire page (Anti-Screenshot / Anti-Photo tracing) */}
      <SecurityWatermark email={user.email} studentId={user.studentId} />

      {/* 2. Privacy Shield (Triggers when user focuses away or opens screenshot tool) */}
      <PrivacyShield
        active={privacyShieldActive}
        onDismiss={() => setPrivacyShieldActive(false)}
      />

      {/* 3. Security Warning Toast (Triggered on right-click, save, print, screenshot attempts) */}
      <SecurityAlertToast
        message={securityToast}
        onClose={() => setSecurityToast(null)}
      />

      {/* 4. Top Header */}
      <Header
        user={user}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        isOnline={isOnline}
        unreadCount={unreadNotifCount}
        onOpenNotifications={() => setIsNotifModalOpen(true)}
        onOpenProfile={() => setActiveTab('security')}
      />

      {/* 5. Main Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        examOngoing={examOngoing}
      />

      {/* 6. Offline Banner notification if connection is lost */}
      {!isOnline && (
        <div className="w-full bg-amber-950/70 border-b border-amber-800/50 py-1.5 px-4 text-center text-xs text-amber-300 flex items-center justify-center gap-2">
          <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          <span>অফলাইন মোড সক্রিয় — সমস্ত গ্রামার তথ্য ও কুইজ অফলাইনে নিরাপদে ব্যবহার করতে পারবেন।</span>
        </div>
      )}

      {/* 7. Main Body Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 pb-24 md:pb-12">
        <AnimatePresence mode="wait">
          {activeTab === 'notes' && (
            <motion.div
              key="notes"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <NotesViewer
                onStartQuizForTopic={handleStartQuizForTopic}
                onMarkTopicRead={handleMarkTopicRead}
                readTopics={user.readTopics}
              />
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <QuizSection
                initialTopicId={targetQuizTopic}
                onAddXp={handleAddXp}
                onSwitchToNotes={() => setActiveTab('notes')}
              />
            </motion.div>
          )}

          {activeTab === 'exam' && (
            <motion.div
              key="exam"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ExamSection
                onExamComplete={handleExamComplete}
                onSwitchToNotes={() => setActiveTab('notes')}
                isPrivacyShieldActive={privacyShieldActive}
                onExamStateChange={(ongoing) => setExamOngoing(ongoing)}
              />
            </motion.div>
          )}

          {activeTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <LeaderboardSection
                user={user}
                onStartExam={() => setActiveTab('exam')}
              />
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <SecuritySection
                user={user}
                onUpdateUser={(u) => setUser(u)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 8. Notification Center Modal */}
      <NotificationModal
        isOpen={isNotifModalOpen}
        onClose={() => setIsNotifModalOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllNotificationsRead}
        onAddCustomNotification={handleAddCustomNotification}
      />
    </div>
  );
}
