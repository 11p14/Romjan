import { UserProgress, LeaderboardEntry, AppNotification, TopicId } from '../types';

const STORAGE_KEYS = {
  USER: 'gv_user_profile',
  LEADERBOARD: 'gv_leaderboard_data',
  NOTIFICATIONS: 'gv_notifications',
  OFFLINE_CACHE: 'gv_offline_cache_time'
};

const INITIAL_USER: UserProgress = {
  name: 'Tanvir Hossain',
  email: 'hmknc3@gmail.com',
  studentId: 'GV-2026-8842',
  avatarSeed: 'tanvir',
  xp: 140,
  level: 2,
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  quizzesCompleted: 4,
  examsCompleted: 1,
  highestExamScore: 85,
  badges: ['🔰 নবাগত শিক্ষার্থী', '🛡️ সিকিউরিটি ভল্ট সদস্য', '🔥 ৩ দিনের স্ট্রাইক'],
  readTopics: ['affirmative-negative', 'tense']
};

const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  { id: 'lb-1', name: 'Zubair Ahmed', studentId: 'GV-2026-1021', xp: 1250, rank: 1, examsPassed: 8, accuracy: 96 },
  { id: 'lb-2', name: 'Farhana Yasmin', studentId: 'GV-2026-1044', xp: 980, rank: 2, examsPassed: 6, accuracy: 92 },
  { id: 'lb-3', name: 'Shafiqul Islam', studentId: 'GV-2026-1109', xp: 840, rank: 3, examsPassed: 5, accuracy: 89 },
  { id: 'lb-4', name: 'Nusrat Jahan', studentId: 'GV-2026-1302', xp: 620, rank: 4, examsPassed: 4, accuracy: 88 },
  { id: 'lb-5', name: 'Tanvir Hossain (You)', studentId: 'GV-2026-8842', xp: 140, rank: 5, examsPassed: 1, accuracy: 85, isCurrentUser: true },
  { id: 'lb-6', name: 'Mahmudur Rahman', studentId: 'GV-2026-1405', xp: 120, rank: 6, examsPassed: 1, accuracy: 80 },
  { id: 'lb-7', name: 'Sadia Sultana', studentId: 'GV-2026-1550', xp: 90, rank: 7, examsPassed: 0, accuracy: 75 }
];

const DEFAULT_NOTIFICATIONS: AppNotification[] = [
  {
    id: 'notif-1',
    title: '🛡️ কনটেন্ট সুরক্ষা সক্রিয়',
    message: 'স্ক্রিনশট, প্রিন্ট ও সেভ সুরক্ষা সক্রিয় রয়েছে। সমস্ত ব্যাকরণ তথ্য নিরাপদে সুরক্ষিত।',
    timestamp: '১ মিনিট পূর্বে',
    read: false,
    type: 'security'
  },
  {
    id: 'notif-2',
    title: '📝 আজকের বিশেষ টিপস',
    message: 'Tense: "Before" এর আগে Past Perfect বসে, কিন্তু "After" এর পরে Past Perfect বসে!',
    timestamp: 'আজ সকাল ১০:০০',
    read: false,
    type: 'tip'
  },
  {
    id: 'notif-3',
    title: '🏆 নতুন লাইভ মডেল টেস্ট উপলভ্য',
    message: 'ইংলিশ গ্রামার চূড়ান্ত মডেল টেস্ট শুরু হয়েছে। পরীক্ষা দিয়ে লিডারবোর্ডে এগিয়ে যান!',
    timestamp: 'আজ সকাল ৮:৩০',
    read: false,
    type: 'exam'
  }
];

export function getUserProfile(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    if (!raw) {
      saveUserProfile(INITIAL_USER);
      return INITIAL_USER;
    }
    const parsed = JSON.parse(raw);
    return { ...INITIAL_USER, ...parsed };
  } catch {
    return INITIAL_USER;
  }
}

export function saveUserProfile(user: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (err) {
    console.error('Error saving user profile to local storage', err);
  }
}

export function addXpAndPoints(pointsToAdd: number, isExam: boolean = false, score: number = 0): UserProgress {
  const current = getUserProfile();
  const newXp = current.xp + pointsToAdd;
  const newLevel = Math.floor(newXp / 100) + 1;
  
  const badges = [...current.badges];
  if (newXp >= 300 && !badges.includes('⭐ গ্রামার স্কলার')) {
    badges.push('⭐ গ্রামার স্কলার');
  }
  if (newXp >= 500 && !badges.includes('👑 সিনট্যাক্স মাস্টার')) {
    badges.push('👑 সিনট্যাক্স মাস্টার');
  }
  if (isExam && score >= 80 && !badges.includes('🎯 এক্সাম টপার')) {
    badges.push('🎯 এক্সাম টপার');
  }

  const updated: UserProgress = {
    ...current,
    xp: newXp,
    level: newLevel,
    quizzesCompleted: isExam ? current.quizzesCompleted : current.quizzesCompleted + 1,
    examsCompleted: isExam ? current.examsCompleted + 1 : current.examsCompleted,
    highestExamScore: isExam ? Math.max(current.highestExamScore, score) : current.highestExamScore,
    badges
  };

  saveUserProfile(updated);
  updateCurrentUserInLeaderboard(updated);
  return updated;
}

export function markTopicAsRead(topicId: TopicId): UserProgress {
  const current = getUserProfile();
  if (current.readTopics.includes(topicId)) return current;

  const readTopics = [...current.readTopics, topicId];
  const updated = {
    ...current,
    readTopics,
    xp: current.xp + 20
  };
  saveUserProfile(updated);
  return updated;
}

export function getLeaderboard(): LeaderboardEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
    let list: LeaderboardEntry[] = raw ? JSON.parse(raw) : DEFAULT_LEADERBOARD;
    
    // Sync current user's score
    const user = getUserProfile();
    list = list.map(item => {
      if (item.isCurrentUser || item.studentId === user.studentId) {
        return {
          ...item,
          name: `${user.name} (You)`,
          studentId: user.studentId,
          xp: user.xp,
          examsPassed: user.examsCompleted,
          accuracy: user.highestExamScore || item.accuracy,
          isCurrentUser: true
        };
      }
      return item;
    });

    // Sort descending by XP
    list.sort((a, b) => b.xp - a.xp);
    // Assign ranks
    list.forEach((item, index) => {
      item.rank = index + 1;
    });

    return list;
  } catch {
    return DEFAULT_LEADERBOARD;
  }
}

function updateCurrentUserInLeaderboard(user: UserProgress) {
  const board = getLeaderboard();
  try {
    localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(board));
  } catch (err) {
    console.error('Failed to sync leaderboard', err);
  }
}

export function getNotifications(): AppNotification[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
    return raw ? JSON.parse(raw) : DEFAULT_NOTIFICATIONS;
  } catch {
    return DEFAULT_NOTIFICATIONS;
  }
}

export function addNotification(notification: Omit<AppNotification, 'id' | 'timestamp' | 'read'>): AppNotification[] {
  const current = getNotifications();
  const newItem: AppNotification = {
    ...notification,
    id: `notif-${Date.now()}`,
    timestamp: 'এখনই',
    read: false
  };
  const updated = [newItem, ...current];
  try {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save notification', err);
  }
  return updated;
}

export function markNotificationsAsRead(): AppNotification[] {
  const current = getNotifications();
  const updated = current.map(item => ({ ...item, read: true }));
  try {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update notifications read state', err);
  }
  return updated;
}
