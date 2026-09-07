import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { GRAMMAR_TOPICS } from '../data/grammarData';
import { TopicId, QuizQuestion } from '../types';
import { soundEffects } from '../utils/security';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw, 
  Award, Sparkles, BookOpen 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizSectionProps {
  initialTopicId?: TopicId;
  onAddXp: (xp: number) => void;
  onSwitchToNotes: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  initialTopicId = 'affirmative-negative',
  onAddXp,
  onSwitchToNotes
}) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>(initialTopicId);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  // Filter questions
  const filteredQuestions: QuizQuestion[] = selectedTopic === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.topicId === selectedTopic);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      soundEffects.playSuccess();
      setScore(prev => prev + 1);
      onAddXp(currentQ.points || 10);
    } else {
      soundEffects.playError();
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
      soundEffects.playSuccess();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 1. Header & Topic Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            গ্রামার অনুশীলন কুইজ
          </h2>
          <p className="text-xs text-slate-400">
            প্রতিটি সঠিক উত্তরের জন্য <span className="text-emerald-400 font-bold">+১০ XP</span> অর্জন করুন!
          </p>
        </div>

        {/* Topic filter selector */}
        <select
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value as TopicId | 'all');
            restartQuiz();
          }}
          className="px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-hidden focus:border-cyan-500 font-medium"
        >
          <option value="all">সব অধ্যায় থেকে মিশ্রিত কুইজ ({QUIZ_QUESTIONS.length} টি প্রশ্ন)</option>
          {GRAMMAR_TOPICS.map(t => (
            <option key={t.id} value={t.id}>{t.titleBn}</option>
          ))}
        </select>
      </div>

      {/* 2. Quiz Body */}
      {showSummary ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl"
        >
          <div className="w-20 h-20 rounded-3xl bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 flex items-center justify-center mx-auto shadow-xl">
            <Award className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">কুইজ সম্পন্ন হয়েছে!</h3>
            <p className="text-sm text-slate-300">
              আপনি <span className="font-bold text-cyan-400">{filteredQuestions.length}</span> টির মধ্যে{' '}
              <span className="font-bold text-emerald-400">{score}</span> টি প্রশ্নের সঠিক উত্তর দিয়েছেন।
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block">মোট স্কোর</span>
              <span className="text-xl font-bold text-cyan-400">{score} / {filteredQuestions.length}</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block">অর্জিত XP</span>
              <span className="text-xl font-bold text-emerald-400">+{score * 10} XP</span>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-[11px] text-slate-400 block">নির্ভুলতা</span>
              <span className="text-xl font-bold text-indigo-400">
                {filteredQuestions.length > 0 ? Math.round((score / filteredQuestions.length) * 100) : 0}%
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>পুনরায় চেষ্টা করুন</span>
            </button>
            <button
              onClick={onSwitchToNotes}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-cyan-950 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>নোটস রিভিশন দিন</span>
            </button>
          </div>
        </motion.div>
      ) : filteredQuestions.length === 0 ? (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
          <p className="text-slate-400 text-sm">এই অধ্যায়ের জন্য কোনো কুইজ প্রশ্ন মেলেনি।</p>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800/90 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          {/* Progress Tracker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-cyan-400">
                প্রশ্ন {currentIndex + 1} / {filteredQuestions.length}
              </span>
              <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                স্কোর: {score}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800/60 inline-block">
              {currentQ.ruleReference}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              let optionStyles = 'bg-slate-950/70 border-slate-800 hover:bg-slate-800/80 text-slate-200';

              if (isAnswered) {
                if (isCorrect) {
                  optionStyles = 'bg-emerald-950/80 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-950';
                } else if (isSelected) {
                  optionStyles = 'bg-rose-950/80 border-rose-500 text-rose-100 shadow-md shadow-rose-950';
                } else {
                  optionStyles = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${optionStyles}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs bg-slate-800 text-slate-300 shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box on Answer */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    ব্যাকরণগত ব্যাখ্যা (Grammar Explanation):
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentQ.explanation}
                </p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-950 transition-all cursor-pointer"
                  >
                    <span>{currentIndex + 1 < filteredQuestions.length ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
