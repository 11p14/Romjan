export type TopicId = 
  | 'affirmative-negative'
  | 'assertive-interrogative'
  | 'completing-sentence'
  | 'degree'
  | 'narration'
  | 'simple-complex-compound'
  | 'tense';

export interface GrammarRule {
  id: string;
  ruleNo: string;
  title: string;
  structure?: string;
  bengaliTip?: string;
  notes?: string[];
  examples: {
    label?: string;
    from: string;
    to: string;
    alternative?: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface GrammarTopic {
  id: TopicId;
  titleBn: string;
  titleEn: string;
  description: string;
  totalRules: number;
  badge: string;
  author: string;
  phone: string;
  rules: GrammarRule[];
}

export interface QuizQuestion {
  id: string;
  topicId: TopicId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  ruleReference: string;
  points: number;
}

export interface UserProgress {
  name: string;
  email: string;
  studentId: string;
  avatarSeed: string;
  xp: number;
  level: number;
  streakDays: number;
  lastActiveDate: string;
  quizzesCompleted: number;
  examsCompleted: number;
  highestExamScore: number;
  badges: string[];
  readTopics: TopicId[];
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  studentId: string;
  xp: number;
  rank: number;
  examsPassed: number;
  accuracy: number;
  isCurrentUser?: boolean;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'security' | 'reward' | 'exam' | 'tip';
}

export interface SecurityEvent {
  type: 'screenshot' | 'right_click' | 'print' | 'devtools' | 'copy' | 'blur';
  timestamp: number;
  message: string;
}
