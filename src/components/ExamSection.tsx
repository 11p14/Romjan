import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { QuizQuestion } from '../types';
import { soundEffects } from '../utils/security';
import confetti from 'canvas-confetti';
import { 
  Timer, AlertTriangle, CheckCircle, XCircle, ShieldAlert, 
  RotateCcw, Award, ArrowRight, ArrowLeft, Check, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExamSectionProps {
  onExamComplete: (score: number, total: number, earnedXp: number) => void;
  onSwitchToNotes: () => void;
  isPrivacyShieldActive: boolean;
  onExamStateChange?: (ongoing: boolean) => void;
}

export const ExamSection: React.FC<ExamSectionProps> = ({
  onExamComplete,
  onSwitchToNotes,
  isPrivacyShieldActive,
  onExamStateChange
}) => {
  const [examStarted, setExamStarted] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes (600 seconds)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [strikes, setStrikes] = useState<number>(0);
  const [reviewMode, setReviewMode] = useState<boolean>(false);

  // Monitor privacy shield / focus loss strikes during exam
  useEffect(() => {
    if (examStarted && !isSubmitted && isPrivacyShieldActive) {
      setStrikes(prev => {
        const nextStrikes = prev + 1;
        soundEffects.playSecurityAlert();
        if (nextStrikes >= 3) {
          // Auto submit on 3 security violations
          submitExam();
        }
        return nextStrikes;
      });
    }
  }, [isPrivacyShieldActive, examStarted, isSubmitted]);

  // Timer countdown
  useEffect(() => {
    if (!examStarted || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, isSubmitted]);

  const startExam = () => {
    // Pick 15 questions randomly or shuffled
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 15);
    setExamQuestions(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setTimeLeft(600);
    setStrikes(0);
    setIsSubmitted(false);
    setReviewMode(false);
    setExamStarted(true);
    if (onExamStateChange) onExamStateChange(true);
  };

  const selectAnswer = (optionIdx: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const submitExam = () => {
    setIsSubmitted(true);
    if (onExamStateChange) onExamStateChange(false);

    // Calculate score
    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / examQuestions.length) * 100);
    const passed = percentage >= 60;
    const earnedXp = passed ? (percentage >= 85 ? 150 : 100) : 30;

    if (passed) {
      soundEffects.playSuccess();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
    } else {
      soundEffects.playError();
    }

    onExamComplete(percentage, examQuestions.length, earnedXp);
  };

  // Format MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Score calculation
  let correctCount = 0;
  examQuestions.forEach((q, idx) => {
    if (answers[idx] === q.correctIndex) correctCount++;
  });
  const scorePercent = examQuestions.length > 0 ? Math.round((correctCount / examQuestions.length) * 100) : 0;
  const isPassed = scorePercent >= 60;

  if (!examStarted) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-2xl">
        <div className="w-20 h-20 rounded-3xl bg-cyan-950/70 border border-cyan-700/50 flex items-center justify-center mx-auto text-cyan-400">
          <Timer className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            ইংরেজি গ্রামার চূড়ান্ত মডেল টেস্ট
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Md Romjan Ali-র ৭টি অধ্যায় (Tense, Narration, Degree, Completing Sentence, Affirmative to Negative, Simple-Complex) থেকে নির্ধারিত ১৫টি প্রশ্ন।
          </p>
        </div>

        {/* Exam rules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-xl mx-auto">
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <span className="text-[11px] text-slate-400 block font-semibold">সময়সীমা</span>
            <span className="text-lg font-bold text-cyan-400">১০ মিনিট</span>
            <p className="text-[10px] text-slate-400 mt-0.5">অটো সাবমিট হবে</p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <span className="text-[11px] text-slate-400 block font-semibold">প্রশ্ন সংখ্যা</span>
            <span className="text-lg font-bold text-emerald-400">১৫ টি MCQ</span>
            <p className="text-[10px] text-slate-400 mt-0.5">পাস মার্ক ৬০%</p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
            <span className="text-[11px] text-slate-400 block font-semibold">নিরাপত্তা নিয়ম</span>
            <span className="text-lg font-bold text-amber-400">৩ স্ট্রাইক সীমা</span>
            <p className="text-[10px] text-slate-400 mt-0.5">ট্যাব সুইচ নিষিদ্ধ</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 max-w-lg mx-auto text-left flex items-start gap-2.5">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">পরীক্ষার অখণ্ডতা বিধি:</span>
            পরীক্ষা চলাকালে উইন্ডো বা ট্যাব পরিবর্তন, স্ক্রিনশট বা কোনো প্রকার অনুচিত পদক্ষেপ নিলে স্বয়ংক্রিয়ভাবে স্ট্রাইক যুক্ত হবে এবং ৩ স্ট্রাইকে পরীক্ষা বাতিল হবে।
          </div>
        </div>

        <button
          onClick={startExam}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-base shadow-xl shadow-cyan-950 transition-all cursor-pointer transform hover:scale-[1.02]"
        >
          পরীক্ষা শুরু করুন
        </button>
      </div>
    );
  }

  // Submitted View
  if (isSubmitted && !reviewMode) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl"
      >
        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto border shadow-xl ${
          isPassed 
            ? 'bg-emerald-950/80 border-emerald-600 text-emerald-400' 
            : 'bg-rose-950/80 border-rose-600 text-rose-400'
        }`}>
          {isPassed ? <Award className="w-10 h-10 animate-bounce" /> : <XCircle className="w-10 h-10" />}
        </div>

        <div className="space-y-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            isPassed ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
          }`}>
            {isPassed ? '🎉 পরীক্ষায় উত্তীর্ণ হয়েছেন' : 'উত্তীর্ণ হতে পারেননি'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            আপনার ফলাফল: {scorePercent}%
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            ১৫টির মধ্যে <span className="font-bold text-cyan-400">{correctCount}</span> টি উত্তর সঠিক হয়েছে।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
            <span className="text-[11px] text-slate-400 block">সঠিক উত্তর</span>
            <span className="text-lg font-bold text-emerald-400">{correctCount}</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
            <span className="text-[11px] text-slate-400 block">ভুল উত্তর</span>
            <span className="text-lg font-bold text-rose-400">{examQuestions.length - correctCount}</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
            <span className="text-[11px] text-slate-400 block">অর্জিত পয়েন্ট</span>
            <span className="text-lg font-bold text-cyan-400">+{isPassed ? (scorePercent >= 85 ? 150 : 100) : 30} XP</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
            <span className="text-[11px] text-slate-400 block">সিকিউরিটি স্ট্রাইক</span>
            <span className="text-lg font-bold text-amber-400">{strikes} / 3</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setReviewMode(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>উত্তরপত্র ও রুলস রিভিউ দেখুন</span>
          </button>
          <button
            onClick={startExam}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>নতুন পরীক্ষা দিন</span>
          </button>
        </div>
      </motion.div>
    );
  }

  // Review Mode View
  if (isSubmitted && reviewMode) {
    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg">
              পরীক্ষার সম্পূর্ণ উত্তরমালা ও ব্যাখ্যা
            </h3>
            <p className="text-xs text-slate-400">
              আপনার স্কোর: {scorePercent}% ({correctCount}/{examQuestions.length})
            </p>
          </div>
          <button
            onClick={() => setReviewMode(false)}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            ফলাফল পাতায় ফিরুন
          </button>
        </div>

        <div className="space-y-4">
          {examQuestions.map((q, idx) => {
            const userAns = answers[idx];
            const isUserCorrect = userAns === q.correctIndex;
            return (
              <div
                key={idx}
                className={`bg-slate-900 border rounded-2xl p-4 sm:p-5 space-y-3 ${
                  isUserCorrect ? 'border-emerald-800/80' : 'border-rose-800/80'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-slate-800 text-slate-300">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400">
                      {q.ruleReference}
                    </span>
                  </div>
                  {isUserCorrect ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                      <CheckCircle className="w-3.5 h-3.5" /> সঠিক (+১০ XP)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-800/60">
                      <XCircle className="w-3.5 h-3.5" /> ভুল
                    </span>
                  )}
                </div>

                <p className="font-semibold text-sm sm:text-base text-slate-100">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, oIdx) => {
                    const isCorrectOpt = oIdx === q.correctIndex;
                    const isSelectedOpt = oIdx === userAns;
                    let optStyle = 'bg-slate-950/50 border-slate-800 text-slate-400';
                    if (isCorrectOpt) {
                      optStyle = 'bg-emerald-950/80 border-emerald-600 text-emerald-200 font-bold';
                    } else if (isSelectedOpt && !isCorrectOpt) {
                      optStyle = 'bg-rose-950/80 border-rose-600 text-rose-200';
                    }

                    return (
                      <div key={oIdx} className={`p-2.5 rounded-xl border flex items-center gap-2 ${optStyle}`}>
                        <span className="font-mono">{String.fromCharCode(65 + oIdx)}.</span>
                        <span>{opt}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-400 block mb-0.5">নিয়ম ও ব্যাখ্যা:</span>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Exam Live Screen
  const currentExamQ = examQuestions[currentIdx];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* 1. Exam Control Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between gap-3 sticky top-[108px] z-20 backdrop-blur-md shadow-xl">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono font-bold text-cyan-300">
            <Timer className={`w-4 h-4 ${timeLeft < 120 ? 'text-rose-400 animate-spin' : 'text-cyan-400'}`} />
            <span className={timeLeft < 120 ? 'text-rose-400 animate-pulse' : ''}>{formatTime(timeLeft)}</span>
          </div>

          {/* Security Strikes */}
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${
            strikes === 0 
              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
              : 'bg-rose-950/60 text-rose-300 border-rose-700/70 animate-pulse'
          }`}>
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>স্ট্রাইক: {strikes}/3</span>
          </div>
        </div>

        <button
          onClick={submitExam}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
        >
          পরীক্ষা শেষ ও সাবমিট
        </button>
      </div>

      {/* 2. Question Navigation Palette */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {examQuestions.map((_, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isCurrent = currentIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-300 scale-105'
                    : isAnswered
                    ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-700/60'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Current Question Card */}
      {currentExamQ && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-cyan-400 font-bold">
              প্রশ্ন {currentIdx + 1} / {examQuestions.length}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[11px]">
              {currentExamQ.ruleReference}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentExamQ.question}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentExamQ.options.map((opt, oIdx) => {
              const isSelected = answers[currentIdx] === oIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => selectAnswer(oIdx)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-500 text-cyan-100 shadow-md shadow-cyan-950'
                      : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/60 text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                </button>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => prev - 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 text-xs font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>পূর্ববর্তী</span>
            </button>

            {currentIdx + 1 < examQuestions.length ? (
              <button
                onClick={() => setCurrentIdx(prev => prev + 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold cursor-pointer"
              >
                <span>পরবর্তী</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={submitExam}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg cursor-pointer"
              >
                <span>পরীক্ষা জমা দিন</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
